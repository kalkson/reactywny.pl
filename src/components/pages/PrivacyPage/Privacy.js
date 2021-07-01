import Headline from 'components/atoms/Headline/Headline';
import React from 'react';

const Privacy = () => {
  return (
    <>
      <Headline className="headline">Polityka prywatności</Headline>
      <h2>
        Polityka prywatności opisuje zasady przetwarzania przez nas informacji
        na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw.
        cookies.
      </h2>
      <ol>
        <li>
          <h3>informacje ogólne</h3>
          <ol>
            <li>
              Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
              adresem url: <b>reactywny.pl</b>
            </li>
            <li>
              Operatorem serwisu oraz Administratorem danych osobowych jest:
              Damian Kalka
            </li>
            <li>
              Adres kontaktowy poczty elektronicznej operatora:
              kontakt@reactywny.pl
            </li>
            <li>
              Operator jest Administratorem Twoich danych osobowych w
              odniesieniu do danych podanych dobrowolnie w Serwisie.
            </li>
            <li>
              Serwis wykorzystuje dane osobowe w następujących celach:
              <ul>
                <li>Prowadzenie newslettera</li>
                <li>Prowadzenie systemu komentarzy</li>
                <li>Obsługa zapytań przez formularz</li>
              </ul>
            </li>
            <li>
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
              ich zachowaniu w następujący sposób:
              <ol>
                <li>
                  Poprzez dobrowolnie wprowadzone w formularzach dane, które
                  zostają wprowadzone do systemów Operatora.
                </li>
                <li>
                  Poprzez zapisywanie w urządzeniach końcowych plików cookie
                  (tzw. „ciasteczka”).
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <h3>Wybrane metody ochrony danych stosowane przez Operatora</h3>
          <ol>
            <li>
              Miejsca logowania i wprowadzania danych osobowych są chronione w
              warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
              dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
              komputerze użytkownika i mogą być odczytane jedynie na docelowym
              serwerze.
            </li>
            <li>
              Istotnym elementem ochrony danych jest regularna aktualizacja
              wszelkiego oprogramowania, wykorzystywanego przez Operatora do
              przetwarzania danych osobowych, co w szczególności oznacza
              regularne aktualizacje komponentów programistycznych.
            </li>
          </ol>
        </li>
        <li>
          <h3>Hosting</h3>
          <ol>
            <li>
              Serwis jest hostowany (technicznie utrzymywany) na serwera
              operatora: Netlify
            </li>
          </ol>
        </li>
        <li>
          <h3>
            Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
          </h3>
          <ol>
            <li>
              W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
              dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
              wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
              ciążących na Administratorze. Dotyczy to takich grup odbiorców:
              <ul>
                <li>Firma hostingowa na zasadzie powierzenia</li>
              </ul>
            </li>
            <li>
              Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
              niż jest to konieczne do wykonania związanych z nimi czynności
              określonych osobnymi przepisami (np. o prowadzeniu rachunkowości).
              W odniesieniu do danych marketingowych dane nie będą przetwarzane
              dłużej niż przez 3 lata.
            </li>
            <li>
              Przysługuje Ci prawo żądania od Administratora:
              <ul>
                <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>oraz przenoszenia danych.</li>
              </ul>
            </li>
            <li>
              Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
              przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych
              osobowych w celu wykonania prawnie uzasadnionych interesów
              realizowanych przez Administratora, w tym profilowania, przy czym
              prawo sprzeciwu nie będzie mogło być wykonane w przypadku
              istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania,
              nadrzędnych wobec Ciebie interesów, praw i wolności, w
              szczególności ustalenia, dochodzenia lub obrony roszczeń.
            </li>
            <li>
              Na działania Administratora przysługuje skarga do Prezesa Urzędu
              Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
            </li>
            <li>
              Podanie danych osobowych jest dobrowolne, lecz niezbędne do
              obsługi Serwisu.
            </li>
            <li>
              W stosunku do Ciebie mogą być podejmowane czynności polegające na
              zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
              świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia
              przez Administratora marketingu bezpośredniego.
            </li>
            <li>
              Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
              przepisów o ochronie danych osobowych. Oznacza to, że nie
              przesyłamy ich poza teren Unii Europejskiej.
            </li>
          </ol>
        </li>
        <li>
          <h3>Informacje w formularzach</h3>
          <ol>
            <li>
              Serwis zbiera informacje podane dobrowolnie przez użytkownika, w
              tym dane osobowe, o ile zostaną one podane.
            </li>
            <li>
              Serwis może zapisać informacje o parametrach połączenia
              (oznaczenie czasu, adres IP).
            </li>
            <li>
              Serwis, w niektórych wypadkach, może zapisać informację
              ułatwiającą powiązanie danych w formularzu z adresem e-mail
              użytkownika wypełniającego formularz. W takim wypadku adres e-mail
              użytkownika pojawia się wewnątrz adresu url strony zawierającej
              formularz.
            </li>
            <li>
              Dane podane w formularzu są przetwarzane w celu wynikającym z
              funkcji konkretnego formularza, np. w celu dokonania procesu
              obsługi zgłoszenia serwisowego lub kontaktu handlowego itp.
              Każdorazowo kontekst i opis formularza w czytelny sposób
              informuje, do czego on służy.
            </li>
          </ol>
        </li>
        <li>
          <h3>Logi Administratora</h3>
          <ol>
            <li>
              Informacje zachowaniu użytkowników w serwisie mogą podlegać
              logowaniu. Dane te są wykorzystywane w celu administrowania
              serwisem i badaniu ruchu na stronie.
            </li>
          </ol>
        </li>
        <li>
          <h3>Istotne techniki marketingowe</h3>
          <ol>
            <li>
              Operator stosuje analizę statystyczną ruchu na stronie, poprzez
              Google Analytics (Google Inc. z siedzibą w USA). Operator nie
              przekazuje do operatora tej usługi danych osobowych, a jedynie
              zanonimizowane informacje. Usługa bazuje na wykorzystaniu
              ciasteczek w urządzeniu końcowym użytkownika. W zakresie
              informacji o preferencjach użytkownika gromadzonych przez sieć
              reklamową Google użytkownik może przeglądać i edytować informacje
              wynikające z plików cookies przy pomocy narzędzia:
              <a href="https://www.google.com/ads/preferences/">
                https://www.google.com/ads/preferences/
              </a>
            </li>
            <li>
              Operator stosuje techniki remarketingowe, pozwalające na
              dopasowanie przekazów reklamowych do zachowania użytkownika na
              stronie, co może dawać złudzenie, że dane osobowe użytkownika są
              wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi
              do przekazania żadnych danych osobowych od Operatora do operatorom
              reklam. Technologicznym warunkiem takich działań jest włączona
              obsługa plików cookie.
            </li>
          </ol>
        </li>
        <li>
          <h3>Informacja o plikach cookies</h3>
          <ol>
            <li>Serwis korzysta z plików cookies.</li>
            <li>
              Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
              szczególności pliki tekstowe, które przechowywane są w urządzeniu
              końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze
              stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę
              strony internetowej, z której pochodzą, czas przechowywania ich na
              urządzeniu końcowym oraz unikalny numer.
            </li>
            <li>
              Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
              Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
              operator Serwisu.
            </li>
            <li>
              Pliki cookies wykorzystywane są w następujących celach:
              <ol>
                <li>
                  utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki
                  której użytkownik nie musi na każdej podstronie Serwisu
                  ponownie wpisywać loginu i hasła;
                </li>
                <li>
                  realizacji celów określonych powyżej w części &quot;Istotne
                  techniki marketingowe&quot;
                </li>
              </ol>
            </li>
            <li>
              W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
              cookies: „sesyjne” (session cookies) oraz „stałe” (persistent
              cookies). Cookies „sesyjne” są plikami tymczasowymi, które
              przechowywane są w urządzeniu końcowym Użytkownika do czasu
              wylogowania, opuszczenia strony internetowej lub wyłączenia
              oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
              przechowywane są w urządzeniu końcowym Użytkownika przez czas
              określony w parametrach plików cookies lub do czasu ich usunięcia
              przez Użytkownika.
            </li>
            <li>
              Oprogramowanie do przeglądania stron internetowych (przeglądarka
              internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
              cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu
              mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka
              internetowa umożliwia usunięcie plików cookies. Możliwe jest także
              automatyczne blokowanie plików cookies Szczegółowe informacje na
              ten temat zawiera pomoc lub dokumentacja przeglądarki
              internetowej.
            </li>
            <li>
              Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
              funkcjonalności dostępne na stronach internetowych Serwisu.
            </li>
            <li>
              Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika
              Serwisu wykorzystywane mogą być również przez współpracujące z
              operatorem Serwisu podmioty, w szczególności dotyczy to firm:
              Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z
              siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
            </li>
          </ol>
        </li>
        <li>
          <h3>
            Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
          </h3>
          <ol>
            <li>
              Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
              ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
              cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
              utrzymania preferencji użytkownika może utrudnić, a w skrajnych
              przypadkach może uniemożliwić korzystanie ze stron www
            </li>
            <li>
              W celu zarządzania ustawienia cookies wybierz z listy poniżej
              przeglądarkę internetową, której używasz i postępuj zgodnie z
              instrukcjami:
              <ul>
                <li>
                  <a href="https://support.microsoft.com/pl-pl/microsoft-edge/wyświetlanie-i-usuwanie-historii-przeglądarki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4">
                    Edge
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">
                    Internet Explorer
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647?hl=pl">
                    Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="http://support.mozilla.org/pl/kb/Włączanie%20i%20wyłączanie%20obsługi%20ciasteczek">
                    Firefox
                  </a>
                </li>
                <li>
                  <a href="https://help.opera.com/pl/latest/web-preferences/#cookies">
                    Opera
                  </a>
                </li>
                <p>Urządzenia mobilne:</p>
                <li>
                  <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">
                    Android
                  </a>
                </li>
                <li>
                  <a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">
                    Safari (iOS)
                  </a>
                </li>
                <li>
                  <a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">
                    Windows Phone
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default Privacy;
