import React, { useState } from 'react'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
}
const messagesInEnglish = {
  myMessage: "Today is {ts, date, ::yyyyMMdd}",
}

export default function App() {
  const [locale, setLocale] = useState('fr');
  return <IntlProvider messages={locale === 'fr' ? messagesInFrench : messagesInEnglish} locale={locale} defaultLocale='en'>
    <p style={{ padding: 20 }}>
      <select name="locale" id="locale" value={locale} onChange={(evt: any) => setLocale(evt.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
      <br /><br />
      <FormattedMessage
        id="myMessage"
        defaultMessage="Today is {ts, date, ::yyyyMMdd}"
        values={{ ts: Date.now() }}
      />
      <br /><br />
      <FormattedNumber value={19} style="currency" currency={locale === 'fr' ? 'EUR' : 'USD'} />
    </p>
  </IntlProvider>
}


// import "./App.css";

// import React from "react";

// import useConfig from "../components/useConfig";
// import logo from "./logo.svg";

// /**
//  * Our Web Application
//  */
// export default function App() {
//   const config = useConfig();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/browser/App.jsx</code> and save to reload.
//       </p>
//     </div>
//   );
// }
