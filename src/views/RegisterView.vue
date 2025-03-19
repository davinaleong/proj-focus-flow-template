<script setup lang="ts">
import { ref } from 'vue'

const text = ref<string>('')

const updateText = (event: Event) => {
  text.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="auth">
    <div class="auth__inner | flow">
      <header class="auth__header">
        <h1 class="auth__header__h1">Create an Account with <strong>Focus Flow</strong></h1>
      </header>

      <main class="auth__main">
        <form method="post" class="auth__main__form | flow">
          <input type="text" name="first_name" style="display: none" />

          <p>
            This is
            <input
              type="text"
              name="name"
              class="auth__main__form__field"
              placeholder="whose"
              :value="text"
              @input="updateText"
              required
            />
            project tracker.
          </p>

          <p>
            I would like to set my password as
            <input
              type="password"
              name="password"
              class="auth__main__form__field"
              placeholder="something strong"
              required
            />
            and confirm that it has been entered correctly again as
            <input
              type="password"
              name="password_confirmation"
              class="auth__main__form__field"
              placeholder="something strong"
              required
            />. My registered email is
            <input
              type="email"
              name="email"
              class="auth__main__form__field"
              placeholder="johndoe@example.com"
              required
            />.
          </p>

          <p>
            I anticipate receiving a verification email at: <strong>{{ text }}</strong
            >.
          </p>

          <p>If I already have an existing account, I should proceed to <a href="#">log in</a>.</p>

          <p>
            <button type="submit" class="button button-primary form__button">Thank you.</button>
          </p>
        </form>
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

.auth__header__h1__a {
  font-weight: var(--fw-bold);
}

strong {
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
