# Code should be performant, changeable, readable and testable

**August 23, 2024**

Code should be _performant_, easy to _change_, easy to _read_, and easy to _test_.

## Performant

- **Deep modules over shallow modules** (Ousterhout): Modules should provide substantial functionality through simple interfaces; users specify desired outcomes rather than implementation details
- **Minimize abstraction layers** (Ousterhout): Each layer introduces overhead; only create abstractions delivering significant value
- **Avoid premature decomposition** (Ousterhout): Keep code unified until performance requirements justify splitting it into smaller pieces
- **Information hiding reduces coupling** (Ousterhout): Concealing implementation specifics enables optimization without disrupting client code

## Changeable

- **Design for change, not current requirements** (Ousterhout): Construct systems capable of evolving without complete rewrites
- **Keep related code together** (Ousterhout): Co-locate functionality that typically changes together to reduce modification scope
- **Eliminate duplication** (Beck): Modify logic once rather than tracking down multiple copies
- **Use dependency injection and avoid global state** (Hevery): Request needed dependencies rather than creating them; sidestep static methods and singletons
- **Separate object construction from use** (Hevery): Decouple instantiation from application logic
- **Favor composition over inheritance** (Hevery): Composition offers greater flexibility when specifications shift

## Readable

- **Choose precise, meaningful names** (Ousterhout/Beck): Names should eliminate requiring supplementary explanation
- **Comments should explain why, not what** (Ousterhout): Code mechanics should self-document; comments justify reasoning
- **Maintain consistent style and patterns** (Ousterhout): Uniformity diminishes cognitive effort during code review
- **Write small, focused units** (Beck): Compact classes, methods, and functions are simpler to comprehend and adjust
- **Express intent clearly** (Beck): Code should resemble well-crafted prose describing the approach
- **Avoid deep nesting** (Beck): Flat structures are clearer than heavily layered logic
- **Extract explaining variables** (Beck): Decompose complex expressions into labeled intermediate values

## Testable

- **Constructor should not do work** (Hevery): Constructors performing operations complicate testing
- **Test behaviors, not implementation** (Hevery): Verify observable outcomes rather than internal mechanics
- **Make tests independent with one assertion each** (Beck): Each test operates autonomously and documents singular expected behavior
- **Test first forces good design** (Beck): Writing tests initially uncovers structural issues early
- **Tests should be proximate to what they're testing**

## Miscellaneous

- **Exception handling is part of normal flow** (Ousterhout): Treat error handling as deliberately as success scenarios
- **Better to be wrong than vague** (Ousterhout): Specific inaccuracies can be corrected; ambiguity resists resolution
- **Red-Green-Refactor cycle** (Beck): Break it, fix it, clean it
- **Code should tell a story** (Beck): Progression through code should follow logical narrative structure
