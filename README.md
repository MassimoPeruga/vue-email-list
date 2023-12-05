# Vue Email List

Il programma esegue una richiesta API per ottenere 10 indirizzi email casuali. Quando tutte le richieste sono complete, la lista di indirizzi email viene mostrata nella pagina.

1. **Dichiarazione della Vue App e dei dati:**
   - Viene dichiarata una nuova istanza di Vue utilizzando `createApp`.
   - All'interno dell'istanza Vue, viene definito l'oggetto `data` che contiene i dati utilizzati nell'applicazione. In questo caso, sono presenti:
     - `apiUrl`: l'URL dell'API che restituisce un indirizzo email casuale.
     - `emails`: un array vuoto che conterrà gli indirizzi email generati.

2. **Ciclo di vita `created`:**
   - Nel ciclo di vita `created`, viene chiamato il metodo `generateEmails` che innesca la generazione degli indirizzi email.

3. **Definizione dei metodi:**
   - `generateEmail`: Un metodo che effettua una richiesta GET all'API specificata e restituisce l'indirizzo email ricevuto nella risposta.
   - `generateEmails`: Un metodo che genera 10 richieste email utilizzando un ciclo for e `axios.all`. Quando tutte le richieste sono completate con successo, l'array `emails` viene popolato con gli indirizzi email ottenuti.

4. **Rendering degli indirizzi email:**
   - All'interno della lista ordinata, viene utilizzato un ciclo `v-for` per iterare sugli indirizzi email nell'array `emails` e mostrarli in elementi `<li>`.