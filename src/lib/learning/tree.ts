/**
 * Tree data structure and helpers for learning path visualization
 */

import type { LearningPath, PathCategory } from "./paths";

export interface TreeNode {
  /** The learning path, or null for synthetic category nodes */
  path: LearningPath | null;
  /** For synthetic nodes: the category label */
  label?: string;
  /** For synthetic nodes: Sanskrit label */
  labelSanskrit?: string;
  /** For synthetic nodes: the category */
  category?: PathCategory;
  /** Whether this is a synthetic category node (not a real path) */
  isCategoryNode?: boolean;
  children: TreeNode[];
  depth: number;
  /** Horizontal position in the tree (computed during layout) */
  x?: number;
  /** Vertical position in the tree (computed during layout) */
  y?: number;
  /** Width of this subtree (for layout) */
  subtreeWidth?: number;
}

/**
 * POS (Part of Speech) category definitions for tree grouping
 */
export const posCategories: Array<{
  id: PathCategory;
  label: string;
  labelSanskrit: string;
  description: string;
}> = [
  {
    id: "tinganta",
    label: "Verbs",
    labelSanskrit: "तिङन्त",
    description: "Conjugated verb forms",
  },
  {
    id: "subanta",
    label: "Nouns",
    labelSanskrit: "सुबन्त",
    description: "Declined noun forms",
  },
  {
    id: "kridanta",
    label: "Participles",
    labelSanskrit: "कृदन्त",
    description: "Verbal derivatives",
  },
  {
    id: "taddhita",
    label: "Secondary",
    labelSanskrit: "तद्धित",
    description: "Secondary derivations",
  },
  {
    id: "sandhi",
    label: "Sandhi",
    labelSanskrit: "सन्धि",
    description: "Sound junction rules",
  },
  {
    id: "karaka",
    label: "Karaka",
    labelSanskrit: "कारक",
    description: "Semantic roles",
  },
  {
    id: "samasa",
    label: "Compounds",
    labelSanskrit: "समास",
    description: "Compound formation",
  },
];

/**
 * Color configuration for path categories
 * Muted but distinguishable palette
 */
export const categoryColors: Record<
  PathCategory,
  { base: string; light: string; medium: string; dark: string }
> = {
  foundation: {
    base: "stone",
    light: "#e7e5e4", // stone-200
    medium: "#78716c", // stone-500
    dark: "#44403c", // stone-700
  },
  tinganta: {
    base: "blue",
    light: "#dbeafe", // blue-100
    medium: "#3b82f6", // blue-500
    dark: "#1d4ed8", // blue-700
  },
  subanta: {
    base: "emerald",
    light: "#d1fae5", // emerald-100
    medium: "#10b981", // emerald-500
    dark: "#047857", // emerald-700
  },
  taddhita: {
    base: "amber",
    light: "#fef3c7", // amber-100
    medium: "#f59e0b", // amber-500
    dark: "#b45309", // amber-700
  },
  kridanta: {
    base: "rose",
    light: "#ffe4e6", // rose-100
    medium: "#f43f5e", // rose-500
    dark: "#be123c", // rose-700
  },
  sandhi: {
    base: "violet",
    light: "#ede9fe", // violet-100
    medium: "#8b5cf6", // violet-500
    dark: "#6d28d9", // violet-700
  },
  karaka: {
    base: "cyan",
    light: "#cffafe", // cyan-100
    medium: "#06b6d4", // cyan-500
    dark: "#0e7490", // cyan-700
  },
  samasa: {
    base: "orange",
    light: "#ffedd5", // orange-100
    medium: "#f97316", // orange-500
    dark: "#c2410c", // orange-700
  },
};

/**
 * Get the fill color for a node based on category and difficulty
 * Lighter colors = easier, darker colors = harder
 */
export function getNodeColor(
  category: PathCategory,
  difficulty: "beginner" | "intermediate" | "advanced",
): string {
  const colors = categoryColors[category];
  switch (difficulty) {
    case "beginner":
      return colors.light;
    case "intermediate":
      return colors.medium;
    case "advanced":
      return colors.dark;
  }
}

/**
 * Get the stroke color for a node (always use medium for good contrast)
 */
export function getNodeStrokeColor(category: PathCategory): string {
  return categoryColors[category].medium;
}

/**
 * Build a tree from an array of learning paths
 * Automatically finds root(s) - paths with no prerequisites
 * Groups non-foundation paths by POS category
 */
export function buildTree(paths: LearningPath[]): TreeNode[] {
  const pathMap = new Map<string, LearningPath>();
  const childrenMap = new Map<string, string[]>();

  // Index paths by id
  for (const path of paths) {
    pathMap.set(path.id, path);
  }

  // Build children map (reverse of prerequisites)
  for (const path of paths) {
    for (const prereqId of path.prerequisites) {
      if (!childrenMap.has(prereqId)) {
        childrenMap.set(prereqId, []);
      }
      childrenMap.get(prereqId)!.push(path.id);
    }
  }

  // Find root paths (those with no prerequisites)
  const rootPaths = paths.filter((p) => p.prerequisites.length === 0);
  if (rootPaths.length === 0) {
    return [];
  }

  const visited = new Set<string>();
  const diffOrder = ["beginner", "intermediate", "advanced"];

  // Recursively build a node and its descendants
  function buildNode(path: LearningPath, depth: number): TreeNode {
    visited.add(path.id);

    const childIds = childrenMap.get(path.id) || [];
    const children: TreeNode[] = [];

    // Get direct children
    const directChildren: LearningPath[] = [];
    const categoryChildren = new Map<PathCategory, LearningPath[]>();

    for (const childId of childIds) {
      const childPath = pathMap.get(childId);
      if (childPath && !visited.has(childId)) {
        // Foundation paths are direct children
        // Non-foundation paths get grouped by category
        if (childPath.category === "foundation") {
          directChildren.push(childPath);
        } else {
          if (!categoryChildren.has(childPath.category)) {
            categoryChildren.set(childPath.category, []);
          }
          categoryChildren.get(childPath.category)!.push(childPath);
        }
      }
    }

    // Sort direct children by difficulty
    directChildren.sort(
      (a, b) =>
        diffOrder.indexOf(a.difficulty) - diffOrder.indexOf(b.difficulty),
    );

    // Add direct foundation children
    for (const child of directChildren) {
      children.push(buildNode(child, depth + 1));
    }

    // Create category nodes for non-foundation children
    for (const posCat of posCategories) {
      const catPaths = categoryChildren.get(posCat.id);
      if (!catPaths || catPaths.length === 0) continue;

      // Sort by difficulty
      catPaths.sort(
        (a, b) =>
          diffOrder.indexOf(a.difficulty) - diffOrder.indexOf(b.difficulty),
      );

      // Build subtree for this category
      const subtree = catPaths.map((p) => buildNode(p, depth + 2));

      // If only one path with no children, promote it directly
      if (subtree.length === 1 && subtree[0].children.length === 0) {
        const singleChild = subtree[0];
        singleChild.depth = depth + 1;
        singleChild.category = posCat.id;
        children.push(singleChild);
        continue;
      }

      // Create category node
      const categoryNode: TreeNode = {
        path: null,
        label: posCat.label,
        labelSanskrit: posCat.labelSanskrit,
        category: posCat.id,
        isCategoryNode: true,
        children: subtree,
        depth: depth + 1,
      };

      children.push(categoryNode);
    }

    return {
      path,
      children,
      depth,
      category: path.category,
    };
  }

  // Build from root paths
  const roots: TreeNode[] = [];
  for (const rootPath of rootPaths) {
    if (!visited.has(rootPath.id)) {
      roots.push(buildNode(rootPath, 0));
    }
  }

  return roots;
}

/**
 * Compute layout positions for tree nodes
 * Uses Reingold-Tilford style algorithm: children centered under parents
 */
export function computeLayout(
  roots: TreeNode[],
  options: {
    nodeRadius: number;
    horizontalSpacing: number;
    verticalSpacing: number;
  },
): { nodes: TreeNode[]; width: number; height: number } {
  const { nodeRadius, horizontalSpacing, verticalSpacing } = options;
  const nodeWidth = nodeRadius * 2 + horizontalSpacing;

  // First pass: compute subtree widths bottom-up
  function computeSubtreeWidth(node: TreeNode): number {
    if (node.children.length === 0) {
      node.subtreeWidth = nodeWidth;
      return nodeWidth;
    }

    let totalWidth = 0;
    for (const child of node.children) {
      totalWidth += computeSubtreeWidth(child);
    }
    node.subtreeWidth = Math.max(nodeWidth, totalWidth);
    return node.subtreeWidth;
  }

  // Second pass: assign x positions top-down
  function assignPositions(node: TreeNode, leftX: number, depth: number) {
    node.depth = depth;
    node.y = nodeRadius + depth * (nodeRadius * 2 + verticalSpacing);

    if (node.children.length === 0) {
      // Leaf node: center in its allocated space
      node.x = leftX + node.subtreeWidth! / 2;
    } else {
      // Parent node: position children, then center self over them
      let childX = leftX;
      for (const child of node.children) {
        assignPositions(child, childX, depth + 1);
        childX += child.subtreeWidth!;
      }

      // Center parent over its children
      const firstChild = node.children[0];
      const lastChild = node.children[node.children.length - 1];
      node.x = (firstChild.x! + lastChild.x!) / 2;
    }
  }

  // Compute layout for each root
  let totalWidth = 0;
  for (const root of roots) {
    computeSubtreeWidth(root);
    totalWidth += root.subtreeWidth!;
  }

  // Assign positions
  let currentX = 0;
  for (const root of roots) {
    assignPositions(root, currentX, 0);
    currentX += root.subtreeWidth!;
  }

  // Find max depth
  let maxDepth = 0;
  function findMaxDepth(node: TreeNode) {
    maxDepth = Math.max(maxDepth, node.depth);
    for (const child of node.children) {
      findMaxDepth(child);
    }
  }
  for (const root of roots) {
    findMaxDepth(root);
  }

  // Collect all nodes in flat array
  const allNodes: TreeNode[] = [];
  function collect(node: TreeNode) {
    allNodes.push(node);
    for (const child of node.children) {
      collect(child);
    }
  }
  for (const root of roots) {
    collect(root);
  }

  return {
    nodes: allNodes,
    width: totalWidth + nodeRadius,
    height:
      (maxDepth + 1) * (nodeRadius * 2 + verticalSpacing) -
      verticalSpacing +
      nodeRadius * 2,
  };
}

/**
 * Get all edges (parent-child connections) from tree
 */
export function getEdges(
  roots: TreeNode[],
): Array<{ from: TreeNode; to: TreeNode }> {
  const edges: Array<{ from: TreeNode; to: TreeNode }> = [];

  function collect(node: TreeNode) {
    for (const child of node.children) {
      edges.push({ from: node, to: child });
      collect(child);
    }
  }

  for (const root of roots) {
    collect(root);
  }

  return edges;
}

/**
 * Get node stroke style based on completion status
 */
export function getCompletionStyle(
  completedCount: number,
  totalCount: number,
): { fill: "none" | "partial" | "full"; strokeDasharray?: string } {
  if (completedCount === 0) {
    return { fill: "none" };
  } else if (completedCount < totalCount) {
    return { fill: "partial", strokeDasharray: "4 2" };
  } else {
    return { fill: "full" };
  }
}
