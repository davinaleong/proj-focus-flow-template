<template>
  <div class="auth">
    <div class="auth__inner | flow">
      <header class="auth__header">
        <h1 class="auth__header__h1">Verify Your Email from <strong>Focus Flow</strong></h1>
      </header>

      <main class="auth__main | flow">
        <p>
          After creating an account, I need to check my email at <strong>jo****cm</strong>. I should
          look for an email titled
          <strong>"Focus Flow: Thank You for Verifying Your Email"</strong> sent from
          <strong>noreply@focusflow.com</strong> to complete the verification process.
        </p>
      </main>
      <footer class="auth__footer">
        <p class="auth__footer__p">Focus Flow &copy; Davina Leong 2025</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.auth {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: var(--space-m);
}

.auth__inner {
  max-width: 60ch;
  padding: var(--space-m);
  border: thin solid var(--clr-charcoal-950);
}

.auth__header__h1 {
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
}

strong {
  color: var(--clr-blue-700);
}

em {
  color: var(--clr-blue-700);
}

a {
  color: var(--clr-blue-700);
}

.auth__main__form__field {
  font-size: var(--fs-md);
  color: var(--clr-charcoal-950);
  background-color: transparent;
  border-block-start: none;
  border-block-end: thin solid var(--clr-charcoal-950);
  border-inline-start: none;
  border-inline-end: none;
}

.button {
  display: inline-grid;
  font-size: var(--fs-md);
  color: var(--clr-clean-50);
  background-color: var(--clr-charcoal-950);
  border: thin solid var(--clr-charcoal-950);
  border-radius: none;
  padding: var(--space-3xs) var(--space-2xs);
}

.auth__footer__p {
  font-size: var(--fs-sm);
  font-style: italic;
  opacity: 0.7;
}

@media (prefers-color-scheme: dark) {
  strong {
    color: var(--clr-blue-300);
  }

  em {
    color: var(--clr-blue-300);
  }

  a {
    color: var(--clr-blue-300);
  }

  .auth__inner {
    border: thin solid var(--clr-clean-50);
  }

  .auth__main__form__field {
    color: var(--clr-clean-50);
    border-block-end: thin solid var(--clr-clean-50);
  }

  .button {
    color: var(--clr-charcoal-950);
    background-color: var(--clr-clean-50);
    border: thin solid var(--clr-clean-50);
    border-radius: none;
  }
}
</style>
