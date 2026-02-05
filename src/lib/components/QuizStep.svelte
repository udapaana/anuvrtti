<script lang="ts">
  import type { QuizData } from '$lib/learning/paths';
  import CommentaryText from './CommentaryText.svelte';

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
  }

  function reset() {
    selectedOption = null;
    userAnswer = '';
    revealed = false;
    isCorrect = null;
  }

  const hasOptions = $derived(quiz.options && quiz.options.length > 0);
</script>

<div class="bg-white rounded-lg border border-stone-200 overflow-hidden">
  <!-- Question -->
  <div class="p-6 border-b border-stone-100 bg-gradient-to-b from-amber-50/50 to-transparent">
    <div class="text-xs font-medium text-amber-700 uppercase tracking-wide mb-2">Self-Check</div>
    <div class="text-lg text-stone-800">
      <CommentaryText text={quiz.question} />
    </div>
  </div>

  <!-- Answer area -->
  <div class="p-6">
    {#if hasOptions}
      <!-- Multiple choice -->
      <div class="space-y-2">
        {#each quiz.options! as option, i}
          {@const isSelected = selectedOption === i}
          {@const isOptionCorrect = option.correct === true}
          {@const showCorrect = revealed && isOptionCorrect}
          {@const showIncorrect = revealed && isSelected && !isOptionCorrect}

          <button
            onclick={() => selectOption(i)}
            disabled={revealed}
            class="w-full text-left px-4 py-3 rounded-lg border-2 transition-all
                   {isSelected && !revealed ? 'border-indigo-500 bg-indigo-50' : ''}
                   {showCorrect ? 'border-green-500 bg-green-50' : ''}
                   {showIncorrect ? 'border-red-500 bg-red-50' : ''}
                   {!isSelected && !showCorrect && !showIncorrect ? 'border-stone-200 hover:border-stone-300' : ''}
                   {revealed ? 'cursor-default' : 'cursor-pointer'}"
          >
            <div class="flex items-center gap-3">
              <span class="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium
                          {isSelected && !revealed ? 'border-indigo-500 bg-indigo-500 text-white' : ''}
                          {showCorrect ? 'border-green-500 bg-green-500 text-white' : ''}
                          {showIncorrect ? 'border-red-500 bg-red-500 text-white' : ''}
                          {!isSelected && !showCorrect && !showIncorrect ? 'border-stone-300 text-stone-500' : ''}">
                {#if showCorrect}
                  ✓
                {:else if showIncorrect}
                  ✗
                {:else}
                  {String.fromCharCode(65 + i)}
                {/if}
              </span>
              <span class="text-stone-700">
                <CommentaryText text={option.text} />
              </span>
            </div>
          </button>
        {/each}
      </div>
    {:else}
      <!-- Short answer -->
      <div class="space-y-3">
        <input
          type="text"
          bind:value={userAnswer}
          disabled={revealed}
          placeholder="Type your answer..."
          class="w-full px-4 py-3 border-2 rounded-lg text-stone-700
                 {revealed && isCorrect ? 'border-green-500 bg-green-50' : ''}
                 {revealed && !isCorrect ? 'border-red-500 bg-red-50' : ''}
                 {!revealed ? 'border-stone-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' : ''}
                 disabled:bg-stone-50"
        />
        {#if revealed && quiz.answer}
          <div class="text-sm">
            <span class="text-stone-500">Correct answer:</span>
            <span class="ml-1 font-medium text-green-700">
              <CommentaryText text={quiz.answer} />
            </span>
          </div>
        {/if}
      </div>
    {/if}

    <!-- Check button / Result -->
    <div class="mt-6">
      {#if !revealed}
        <button
          onclick={checkAnswer}
          disabled={hasOptions ? selectedOption === null : !userAnswer.trim()}
          class="px-6 py-2 bg-indigo-500 text-white rounded-lg font-medium
                 hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-colors"
        >
          Check Answer
        </button>
      {:else}
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            {#if isCorrect}
              <span class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="font-medium text-green-700">Correct!</span>
            {:else}
              <span class="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span class="font-medium text-red-700">Not quite</span>
            {/if}
          </div>
          <button
            onclick={reset}
            class="text-sm text-stone-500 hover:text-indigo-600 transition-colors"
          >
            Try again
          </button>
        </div>
      {/if}
    </div>

    <!-- Explanation (shown after reveal) -->
    {#if revealed && quiz.explanation}
      <div class="mt-6 p-4 bg-stone-50 rounded-lg border border-stone-200">
        <div class="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">Explanation</div>
        <div class="text-stone-700 text-sm">
          <CommentaryText text={quiz.explanation} />
        </div>
      </div>
    {/if}
  </div>
</div>
