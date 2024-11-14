# App setup

Aplikacja ma za zadanie wczytać plik `text.txt`, następnie wykonać zapytanie do API o utworzenie treści na stronie zgodnie z pobranym tekstem oraz zapisanie go w pliku `artykul.html`

1. Sklonuj repozytorium oraz przejdź do niego

```
git clone https://github.com/Kacegz/oxido-task
cd oxido-task
```

2. Zainstaluj biblioteki

```
npm install
```

3. Dodaj plik ze zmiennymi środowiskowymi oraz zapisz je do pliku

```
touch .env | echo 'apikey="YOURAPIKEY"'>.env
```

4. Uruchom aplikację

```
npm start
```

5. Zadanie dodatkowe

```
npm run extra
```
