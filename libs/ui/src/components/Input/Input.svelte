<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type = "text";
  export let label = "";
  export let placeholder = "";
  export let value = "";

  const handleChange = (event: Event) => {
    const _value = (event.target as HTMLInputElement).value;
    dispatch("change", _value);
    (event.target as HTMLInputElement).value = value;
  };

  const dispatch = createEventDispatcher();
</script>

<label>
  {#if label}
    <span class="label">{label}</span>
  {/if}
  <input {type} {placeholder} on:input={handleChange} {value} />
</label>

<style lang="postcss">
  label {
    display: flex;
    flex-direction: column;
  }
  .label {
    opacity: 0.8;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 3px;
  }
  input {
    appearance: none;
    font-size: 1rem;
    border: none;
    padding: 0 6px;
    background: var(--color-surface-on-background);
    border: 1px solid var(--color-border);
    border-radius: var(--base-radius);
    height: 36px;
  }
</style>
