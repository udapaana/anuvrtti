<script lang="ts">
  import type { QuizData } from '$lib/learning/paths';
  import CommentaryText from './CommentaryText.svelte';

  /*
    A quiz step reuses the reader's option buttons and its verdict line, so a
    right answer looks the same everywhere in the app: the done accent for
    correct, ink for a miss, quiet for a shown answer. What goes is the second
    quiz language — indigo fill buttons, teal/red circles, rounded-2xl cards.
  */
  interface Props {
    quiz: QuizData;
    onComplete?: () => void;
  }

  let { quiz, onComplete }: Props = $props();

  let selectedOption = $state<number | null>(null);
  let userAnswer = $state('');
  let revealed = $state(false);
  let isCorrect = $state<boolean | null>(null);

  function selectOption(index: number) {
    if (revealed) return;
    selectedOption = index;
  }

  function checkAnswer() {
    revealed = true;

    if (quiz.options && quiz.options.length > 0) {
      // Multiple choice
      if (selectedOption !== null) {
        isCorrect = quiz.options[selectedOption].correct === true;
      }
    } else if (quiz.answer) {
      // Short answer - simple string match (case insensitive)
      const normalizedUser = userAnswer.trim().toLowerCase();
      const normalizedAnswer = quiz.answer.trim().toLowerCase();
      isCorrect = normalizedUser === normalizedAnswer;
    }
    if (isCorrect) onComplete?.();
  }

  function reset() {
    selectedOption = null;
    userAnswer = '';
    revealed = false;
    isCorrect = null;
  }

  const hasOptions = $derived(quiz.options && quiz.options.length > 0);
</script>

<div class="quiz">
  <div class="question">
    <span class="label">self-check</span>
    <div class="prompt"><CommentaryText text={quiz.question} /></div>
  </div>

  {#if hasOptions}
    <div class="options">
      {#each quiz.options! as option, i}
        {@const isSelected = selectedOption === i}
        {@const isOptionCorrect = option.correct === true}
        {@const showCorrect = revealed && isOptionCorrect}
        {@const showIncorrect = revealed && isSelected && !isOptionCorrect}

        <button
          class="opt"
          class:on={isSelected && !revealed}
          class:correct={showCorrect}
          class:miss={showIncorrect}
          class:locked={revealed}
          disabled={revealed}
          onclick={() => selectOption(i)}
        >
          <span class="mark">
            {#if showCorrect}✓{:else if showIncorrect}✗{:else}{String.fromCharCode(65 + i)}{/if}
          </span>
          <span class="text"><CommentaryText text={option.text} /></span>
        </button>
      {/each}
    </div>
  {:else}
    <div class="short">
      <input
        type="text"
        bind:value={userAnswer}
        disabled={revealed}
        placeholder="type your answer"
        class:correct={revealed && isCorrect}
        class:miss={revealed && !isCorrect}
      />
      {#if revealed && quiz.answer}
        <span class="answer">
          <span class="answer-label">the answer is</span>
          <CommentaryText text={quiz.answer} />
        </span>
      {/if}
    </div>
  {/if}

  <div class="foot">
    {#if !revealed}
      <button
        class="check"
        disabled={hasOptions ? selectedOption === null : !userAnswer.trim()}
        onclick={checkAnswer}
      >
        check
      </button>
    {:else}
      <span class="verdict" class:ok={isCorrect} class:no={!isCorrect}>
        {isCorrect ? '✓ correct' : '✗ not quite'}
      </span>
      <button class="again" onclick={reset}>try again</button>
    {/if}
  </div>

  {#if revealed && quiz.explanation}
    <div class="explanation">
      <span class="label">why</span>
      <CommentaryText text={quiz.explanation} />
    </div>
  {/if}
</div>

<style>
  .quiz {
    display: flex;
    flex-direction: column;
    gap: 14px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 20px;
  }

  .question {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .prompt {
    font-size: 17px;
    line-height: 1.6;
    color: var(--ink);
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .opt {
    display: flex;
    align-items: baseline;
    gap: 12px;
    width: 100%;
    text-align: left;
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 9px 12px;
    cursor: pointer;
    font: inherit;
    color: var(--ink-2);
  }
  .opt:hover:not(.locked) {
    border-color: var(--ink);
  }
  .opt.on {
    border-color: var(--ink);
  }
  .opt.correct {
    border-color: var(--accent-ok);
    color: var(--ink);
  }
  .opt.miss {
    border-color: var(--ink);
    color: var(--muted);
  }
  .opt.locked {
    cursor: default;
  }
  .mark {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
    flex: none;
    width: 1rem;
  }
  .opt.correct .mark {
    color: var(--accent-ok);
  }
  .text {
    min-width: 0;
  }

  .short {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .short input {
    font: inherit;
    font-size: 16px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 9px 12px;
    outline: none;
  }
  .short input:focus {
    border-color: var(--accent);
  }
  .short input.correct {
    border-color: var(--accent-ok);
  }
  .short input.miss {
    border-color: var(--ink);
  }
  .answer {
    font-size: 15px;
    color: var(--ink);
  }
  .answer-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
    padding-right: 6px;
  }

  .foot {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .check,
  .again {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--accent);
    padding: 5px 11px;
    cursor: pointer;
  }
  .check:disabled {
    color: var(--faint);
    border-color: var(--rule);
    cursor: default;
  }
  .again {
    border: none;
    color: var(--quiet);
    padding: 0;
  }
  .again:hover {
    color: var(--ink);
  }

  .verdict {
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .verdict.ok {
    color: var(--accent-ok);
  }
  .verdict.no {
    color: var(--ink);
  }

  .explanation {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--sunken);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 14px;
    font-size: 15px;
    color: var(--ink-2);
  }
</style>
