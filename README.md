# WalletInSight

## Descrizione
WalletInSight è un'applicazione web progettata per aiutarti a monitorare le tue spese domestiche.
Attraverso l'estrazione dei movimenti del tuo conto, che puoi caricare mensilmente tramite un file Excel, il sistema aggiunge automaticamente i movimenti a un database e li categorizza in categorie predefinite.

## Funzionalità
- **Caricamento Movimenti**: Importa i movimenti dal tuo conto bancario tramite file Excel.
- **Categorizzazione Automatica**: I movimenti vengono automaticamente categorizzati in base a categorie predefinite.
- **Dashboard Interattiva**: Visualizza un'analisi mensile delle entrate e delle uscite, insieme a grafici che rappresentano le spese per categoria.
- **Modifica Categorie**: Possibilità di modificare le categorie di ogni movimento, con feedback per il sistema di categorizzazione.

## Architettura del Sistema
- **Frontend**: Sviluppato in Vue.js per un'interfaccia utente reattiva e intuitiva.
- **Backend**: Utilizza Node.js per gestire le richieste e la logica di business.
- **Microservizio di Categorizzazione**: Implementato in Python, comunica con il backend tramite gRPC per una categorizzazione efficiente.
- **Database**: PostgreSQL, con eventuali plugin per migliorare la gestione della categorizzazione.
- **Deployment**: Utilizza Docker Compose per il deploy dell'intero sistema, facilitando la configurazione e la scalabilità.

## Installazione
1. Clona il repository:
   ```bash
   git clone <repository-url>
   ```
2. Naviga nella cartella del progetto:
   ```bash
   cd WalletInSight
   ```
3. Esegui Docker Compose per avviare i servizi:
   ```bash
   docker-compose up
   ```

## Contribuire
Se desideri contribuire al progetto, sentiti libero di aprire una pull request o segnalare problemi.

## Licenza
Questo progetto è sotto licenza GNU. Vedi il file LICENSE per maggiori dettagli.