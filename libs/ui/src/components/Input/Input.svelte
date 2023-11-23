<script lang="ts">
  export let type = "text";
  export let label = "";
  export let placeholder = "";
</script>

<label>
  {#if label}
    <span class="label">{label}</span>
  {/if}
  <input {type} {placeholder} />
</label>

<style lang="postcss">
  label {
    display: flex;
    flex-direction: column;
  }
  input {
    appearance: none;
    font-size: 1rem;
    border: none;
    padding: 0 6px;
  }
</style>
