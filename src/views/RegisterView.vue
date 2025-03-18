<template>
  <div class="auth">
    <header class="auth__header">
      <h1 class="auth__header__h1">Create an Account with Focus Flow</h1>
    </header>

    <main class="auth__main">
      <form method="post" class="auth__main__form">
        <input type="text" name="first_name" style="display: none" />

        <p>
          This is
          <input
            type="text"
            name="name"
            class="auth__main__form__field"
            placeholder="John Doe's"
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
            placeholder="********"
            required
          />
          and confirm that it has been entered correctly again
          <input
            type="password"
            name="password_confirmation"
            class="auth__main__form__field"
            placeholder="********"
            required
          />. My registered email is
          <input
            type="email"
            name="email"
            class="auth__main__form__field"
            placeholder="janedoe@example.com"
            required
          />.
        </p>

        <p>I anticipate receiving a verification email at janedoe@example.com.</p>

        <p>
          If I already have an existing account, I should proceed to <a href="/login">log in</a>.
        </p>

        <p><button type="submit" class="button button-primary form__button">Thank you.</button></p>
      </form>
    </main>
    <footer class="auth__footer">
      <p class="auth__footer__p">Focus Flow &copy; Davina Leong 2025</p>
    </footer>
  </div>
</template>
