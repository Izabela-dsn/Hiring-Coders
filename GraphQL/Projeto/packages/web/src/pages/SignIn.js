import React from 'react'

export default function SignIn() {
  return (
    <form action="/authenticate" method="POST">
      <fieldset>
        <label for="email">E-mail</label>
        <input
          name="email"
          type="email"
          id="email"
          inputmode="email"
          autocomplete="username"
        />
      </fieldset>

      <fieldset>
        <label for="password">Senha</label>
        <input
          name="password"
          type="password"
          id="password"
          autocomplete="current-password"
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  )
}
