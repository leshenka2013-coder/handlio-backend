/* Handlio — application */

// ========== I18N ==========
    const translations = {
      pl: {
nav_reports: "Skargi",
btn_write_seller: "Napisz do sprzedawcy",
btn_report: "Zgłoś",
        nav_home: "Główna",
        btn_share: "Udostępnij",
        btn_load_more: "Pokaż więcej",
        toast_link_copied: "Link skopiowany",
        nav_auto: "Samochody",
        nav_moto: "Motocykle",
        nav_realty: "Nieruchomości",
        nav_abroad: "Nieruchomości zagraniczne",
cat_name_realty_abroad: "Nieruchomości zagraniczne",
        abroad_title: "Nieruchomości zagraniczne",
        abroad_subtitle: "Apartamenty, domy i inwestycje poza Polską",
        ph_search_abroad: "Kraj, miasto, opis...",
        stat_abroad: "Nieruchomości zagraniczne",
        nav_my: "Moje",
nav_chat: "Chat",
nav_notifications: "Powiadomienia",
nav_seller: "Kabinet sprzedawcy",
        nav_fav: "Ulubione",
        fav_title: "Ulubione",
        fav_subtitle: "Ogłoszenia, które zapisałeś",
        empty_fav: "Nie masz jeszcze ulubionych ogłoszeń",
        btn_fav: "Dodaj do ulubionych",
        btn_unfav: "Usuń z ulubionych",
        btn_edit: "Edytuj",
        btn_boost: "Podbij (24h)",
        btn_boosted: "Podbite ✓",
        btn_save: "Zapisz zmiany",
        toast_fav_add: "Dodano do ulubionych",
        toast_fav_remove: "Usunięto z ulubionych",
        toast_boosted: "Ogłoszenie podbite na 24h!",
        toast_editing: "Edytujesz ogłoszenie",
        toast_saved: "Zmiany zapisane",
        label_params: "Parametry",
        label_desc: "Opis",
        active_until: "Aktywne do",
        nav_add: "+ Dodaj",
        nav_pricing: "Cennik",
        pricing_title: "Cennik",
        pricing_subtitle: "Proste i przejrzyste ceny — bez ukrytych opłat",
        pricing_private: "Dla osób prywatnych",
        pricing_business: "Dla firm i pośredników",
        badge_popular: "Popularne",
        badge_best: "Najlepszy wybór",
        plan_basic: "Ogłoszenie podstawowe",
        plan_basic_desc: "Idealne, by szybko sprzedać auto, motocykl lub nieruchomość.",
        plan_extend: "Przedłużenie",
        plan_extend_desc: "Przedłuż aktywne ogłoszenie o kolejne 15 dni.",
        plan_boost: "Podbicie",
        plan_boost_desc: "Wypchnij ogłoszenie na górę listy na 24 godziny.",
        per_15: "/ 15 dni",
        feat_15: "✓ 15 dni publikacji",
        feat_photos: "✓ Do 15 zdjęć",
        feat_edit: "✓ Edycja ogłoszenia",
        feat_extend: "✓ +15 dni do ogłoszenia",
        feat_keep: "✓ Zachowujesz pozycję",
        feat_top: "✓ Na górze listy",
        feat_24h: "✓ Działa 24 godziny",
        feat_20photos: "✓ Do 20 zdjęć",
        feat_30: "✓ 30 dni",
        feat_stats: "✓ Statystyki",
        feat_1boost: "✓ 1 podbicie gratis",
        feat_3boost: "✓ 3 podbicia gratis",
        biz_single: "1 ogłoszenie",
        biz_single_desc: "Pojedyncze ogłoszenie firmowe.",
        biz_pack5: "Pakiet 5",
        biz_pack5_desc: "5 ogłoszeń na 30 dni — ok. 11,80 zł / szt.",
        biz_pack15: "Pakiet 15",
        biz_pack15_desc: "Dla aktywnych sprzedawców — ok. 9,93 zł / szt.",
        biz_pack40: "Pakiet 40",
        biz_pack40_desc: "Dla salonów i agencji — ok. 8,73 zł / szt.",
        btn_start: "Dodaj ogłoszenie",
        pay_title: "Opłać ogłoszenie",
        pay_subtitle: "Wybierz metodę płatności (symulacja)",
        pay_total: "Do zapłaty",
        btn_pay: "Zapłać",
        pay_demo_note: "To tylko demonstracja — pieniądze nie są pobierane.",
        pay_processing: "Przetwarzanie płatności...",
        nav_admin: "Moderacja",
nav_reports: "Skargi",
        admin_title: "Panel moderacji",
        admin_subtitle: "Zarządzaj ogłoszeniami i użytkownikami",
        mod_pending: "Oczekujące",
        mod_approved: "Zatwierdzone",
        mod_rejected: "Odrzucone",
        mod_all: "Wszystkie",
        btn_approve: "Zatwierdź",
        btn_reject: "Odrzuć",
        empty_mod: "Brak ogłoszeń w tej kategorii",
        toast_approved: "Ogłoszenie zatwierdzone",
        toast_rejected: "Ogłoszenie odrzucone",
        toast_admin_only: "Tylko dla administratora",
        toast_paid: "Opłacono! Ogłoszenie oczekuje na moderację",
        days: "dni",
        hero_badge: "Tanie ogłoszenia dla wszystkich",
        home_title: "Kupuj i sprzedawaj prosto",
        home_subtitle: "Samochody, motocykle i nieruchomości — wszystko w jednym miejscu",
        recent_title: "Najnowsze ogłoszenia",
        btn_add: "+ Dodaj ogłoszenie",
        auto_title: "Samochody",
        auto_subtitle: "Osobowe, SUV-y, dostawcze",
        moto_title: "Motocykle",
        moto_subtitle: "Motocykle, skutery, quady",
        realty_title: "Nieruchomości",
        realty_subtitle: "Mieszkania, domy, działki, lokale",
        my_title: "Moje ogłoszenia",
        my_subtitle: "Zarządzaj swoimi ogłoszeniami",
        add_title: "Dodaj ogłoszenie",
        add_subtitle: "Wypełnij formularz — ogłoszenie pojawi się od razu",
        filter_search: "Szukaj",
        filter_price_from: "Cena od",
        filter_price_to: "Cena do",
        filter_sort: "Sortowanie",
        sort_new: "Najnowsze",
        sort_cheap: "Najtańsze",
        sort_exp: "Najdroższe",
        form_category: "Kategoria",
        form_choose: "Wybierz...",
        cat_auto: "Samochody",
        cat_moto: "Motocykle",
        cat_realty: "Nieruchomości",
        form_title: "Tytuł",
        form_price: "Cena (zł)",
        form_city: "Miasto",
        form_desc: "Opis",
        form_image: "Zdjęcia",
        form_image_hint: "Możesz dodać do 8 zdjęć (jpg, png). Zostaną automatycznie zmniejszone.",
        toast_max_photos: "Maksymalnie 8 zdjęć",
        form_phone: "Telefon kontaktowy *",
        form_year: "Rok",
        form_mileage: "Przebieg (km)",
        form_fuel: "Paliwo",
        form_gearbox: "Skrzynia",
        form_condition: "Stan",
        form_engine: "Pojemność (cm³)",
        form_area: "Powierzchnia (m²)",
        form_rooms: "Liczba pokoi",
        form_floor: "Piętro",
        form_deal: "Typ transakcji",
        form_prop_type: "Rodzaj nieruchomości",
        fuel_petrol: "Benzyna",
        fuel_diesel: "Diesel",
        fuel_lpg: "LPG",
        fuel_hybrid: "Hybryda",
        fuel_electric: "Elektryczny",
        gear_manual: "Manualna",
        gear_auto: "Automatyczna",
        cond_new: "Nowy",
        cond_used: "Używany",
        cond_damaged: "Uszkodzony",
        deal_sale: "Sprzedaż",
        deal_rent: "Wynajem",
        tab_sale: "Sprzedaż",
        tab_rent: "Wynajem",
        tab_all: "Wszystkie",
        auth_title: "Rejestracja",
        auth_title_login: "Logowanie",
        auth_subtitle: "Zarejestruj się, aby dodawać ogłoszenia",
        auth_subtitle_login: "Zaloguj się do swojego konta",
        auth_note: "Aby dodać ogłoszenie, musisz mieć konto.",
        type_private: "Osoba prywatna",
        type_business: "Firma",
        form_name: "Imię i nazwisko *",
        form_company: "Nazwa firmy *",
        form_nip: "NIP *",
        form_contact: "Osoba kontaktowa *",
        form_email: "E-mail *",
        form_phone_reg: "Telefon *",
        form_password: "Hasło *",
        btn_register: "Zarejestruj się",
        btn_login: "Zaloguj się",
        btn_logout: "Wyloguj",
        link_forgot: "Nie pamiętasz hasła?",
        pwd_change_title: "Zmiana hasła",
        pwd_forgot_title: "Odzyskiwanie hasła",
        pwd_current: "Obecne hasło",
        pwd_new: "Nowe hasło",
        pwd_confirm: "Powtórz nowe hasło",
        pwd_save: "Zapisz hasło",
        pwd_send_code: "Wyślij kod",
        pwd_code: "Kod z e-maila",
        pwd_reset_btn: "Ustaw nowe hasło",
        pwd_resend: "Wyślij kod ponownie",
        pwd_forgot_hint: "Podaj e-mail konta — wyślemy kod resetujący.",
        pwd_changed: "Hasło zmienione",
        pwd_mismatch: "Hasła nie są takie same",
        pwd_wrong_current: "Błędne obecne hasło",
        pwd_too_short: "Hasło min. 4 znaki",
        pwd_code_sent: "Kod resetujący wygenerowany",
        pwd_code_wrong: "Nieprawidłowy kod",
        pwd_code_expired: "Kod wygasł — wyślij ponownie",
        pwd_reset_ok: "Hasło zresetowane — możesz się zalogować",
        pwd_sent_demo: "Kod wysłany na e-mail (tryb demo — kod lokalnie):",
        pwd_sent_generic: "Jeśli konto istnieje, kod został wysłany na e-mail.",
        pwd_no_user: "Nie znaleziono konta",
        have_account: "Masz już konto?",
        no_account: "Nie masz konta?",
        btn_login_link: "Zaloguj się",
        btn_register_link: "Zarejestruj się",
        toast_register_ok: "Konto utworzone!",
        toast_login_ok: "Zalogowano",
        toast_login_fail: "Błędny e-mail lub hasło",
        toast_email_exists: "Ten e-mail jest już zarejestrowany",
        toast_fill_required: "Wypełnij wszystkie wymagane pola",
        toast_logout: "Wylogowano",
        prop_apartment: "Mieszkanie",
        prop_house: "Dom",
        prop_plot: "Działka",
        prop_commercial: "Lokal użytkowy",
        btn_publish: "Opublikuj",
        btn_cancel: "Anuluj",
        ph_search_auto: "Marka, model...",
        ph_search_moto: "Marka, model...",
        ph_search_realty: "Miasto, dzielnica...",
        ph_any: "Dowolna",
        ph_title: "np. Toyota Camry 2019",
        ph_city: "Warszawa",
        ph_desc: "Dodatkowe informacje...",
        empty_none: "Brak ogłoszeń. Bądź pierwszy!",
        empty_search: "Nic nie znaleziono",
        empty_my: "Nie masz jeszcze ogłoszeń",
        empty_my_btn: "Dodaj pierwsze",
        btn_call: "Zadzwoń",
        btn_delete: "Usuń ogłoszenie",
        toast_published: "Ogłoszenie opublikowane!",
        toast_deleted: "Ogłoszenie usunięte",
        confirm_delete: "Usunąć to ogłoszenie?",

        nav_rules: "Regulamin",
        nav_privacy: "Polityka prywatności",
        nav_cookies: "Polityka cookies",
        nav_help: "Pomoc",
        nav_safety: "Zasady bezpieczeństwa",
        footer_info: "Informacje",
        privacy_title: "Polityka prywatności",
        privacy_subtitle: "Ochrona danych osobowych (RODO)",
        cookies_title: "Polityka cookies",
        cookies_subtitle: "Pliki cookie i lokalne przechowywanie danych",
        help_title: "Pomoc",
        help_subtitle: "Najczęstsze pytania i kontakt",
        safety_title: "Zasady bezpieczeństwa",
        safety_subtitle: "Bezpieczne transakcje na Handlio",
        rules_title: "Regulamin i zasady publikacji ogłoszeń",
        rules_subtitle: "Zasady zgodne z prawem Rzeczypospolitej Polskiej",
        rules_demo_note: "To wersja demonstracyjna serwisu. Poniższy regulamin opisuje zasady, które będą obowiązywać w pełnej wersji Handlio. Publikując ogłoszenie, akceptujesz te zasady.",
        rules_h1: "1. Postanowienia ogólne",
        rules_p1: "Serwis Handlio umożliwia publikację ogłoszeń dotyczących samochodów, motocykli oraz nieruchomości. Administratorem serwisu jest podmiot prowadzący Handlio (dane zostaną uzupełnione przed uruchomieniem pełnej wersji). Korzystanie z serwisu oznacza akceptację niniejszego regulaminu.",
        rules_h2: "2. Podstawy prawne",
        rules_l2a: "Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną",
        rules_l2b: "Rozporządzenie RODO (UE) 2016/679 — ochrona danych osobowych",
        rules_l2c: "Ustawa o prawach konsumenta",
        rules_l2d: "Kodeks cywilny (m.in. przepisy o sprzedaży i najmie)",
        rules_l2e: "Przepisy dotyczące przeciwdziałania praniu pieniędzy (w zakresie obowiązującym, jeśli dotyczy)",
        rules_h3: "3. Zasady publikacji ogłoszeń",
        rules_l3a: "Ogłoszeniodawca musi mieć ukończone 18 lat lub działać za zgodą opiekuna prawnego w granicach prawa.",
        rules_l3b: "Treść ogłoszenia musi być prawdziwa, rzetelna i nie wprowadzać w błąd co do ceny, stanu, lokalizacji ani parametrów przedmiotu.",
        rules_l3c: "Zabronione jest publikowanie ogłoszeń dotyczących przedmiotów pochodzących z przestępstwa lub których obrót jest nielegalny.",
        rules_l3d: "Jedno ogłoszenie = jeden przedmiot / jedna nieruchomość.",
        rules_l3e: "Zdjęcia muszą przedstawiać oferowany przedmiot i nie naruszać praw osób trzecich.",
        rules_l3f: "Ogłoszeniodawca ponosi pełną odpowiedzialność za treść ogłoszenia i komunikację z innymi użytkownikami.",
        rules_h4: "4. Treści zabronione",
        rules_l4a: "Treści bezprawne, zniesławiające, nawołujące do nienawiści lub przemocy",
        rules_l4b: "Spam, oszustwa, phishing, próby wyłudzenia danych lub środków",
        rules_l4c: "Działania uniemożliwiające weryfikację tożsamości w sposób przewidziany w serwisie",
        rules_l4d: "Powielanie tego samego ogłoszenia w celu sztucznego zwiększenia widoczności",
        rules_l4e: "Naruszenie dóbr osobistych lub własności intelektualnej",
        rules_h5: "5. Moderacja",
        rules_p5: "Administrator ma prawo odmówić publikacji, ukryć lub usunąć ogłoszenie naruszające regulamin lub prawo, a także ograniczyć dostęp do konta.",
        rules_h6: "6. Płatności",
        rules_p6: "Opłaty wynikają z aktualnego cennika. W wersji demonstracyjnej płatności są symulowane.",
        rules_h7: "7. Dane osobowe (RODO)",
        rules_p7: "Dane są przetwarzane w celu świadczenia usługi ogłoszeniowej. Użytkownik ma prawa wynikające z RODO. W wersji demo dane zapisują się lokalnie w przeglądarce.",
        rules_h8: "8. Odpowiedzialność",
        rules_p8: "Serwis nie jest stroną umów między użytkownikami. Zalecamy ostrożność i weryfikację drugiej strony transakcji.",
        rules_h9: "9. Nieruchomości",
        rules_p9: "Opis nieruchomości musi być rzetelny. Ogłoszeniodawca oświadcza, że jest uprawniony do dysponowania nieruchomością lub działa w imieniu uprawnionego. Oferty zagraniczne wymagają wyboru kraju.",
        rules_h10: "10. Kontakt i reklamacje",
        rules_p10: "Kontakt: kontakt@handlio.pl (po uruchomieniu pełnej wersji). Spory rozpatrywane według prawa polskiego.",
        form_location_type: "Lokalizacja",
        loc_poland: "Polska",
        loc_abroad: "Za granicą",
        form_district: "Dzielnica / osiedle",
        form_country: "Kraj",
        form_city_abroad: "Miasto / miejscowość",
        filter_location: "Lokalizacja",
        filter_city: "Miasto",
        filter_country: "Kraj",
        city_other: "Inna miejscowość (wpisz)",
        form_accept_rules: "Oświadczam, że zapoznałem/am się z Regulaminem i akceptuję zasady publikacji ogłoszeń. Podane dane są prawdziwe.",
        footer: "Handlio — wersja demonstracyjna. Dane są przechowywane tylko w Twojej przeglądarce (localStorage).",
        stat_auto: "Samochody",
        stat_moto: "Motocykle",
        stat_realty: "Nieruchomości",
        stat_total: "Razem",
        min_ago: "min temu",footer: "Handlio — dane są przechowywane na serwerze zgodnie z Polityką prywatności.",
        h_ago: "godz. temu",
        yesterday: "Wczoraj",
        cat_name_auto: "Samochody",
        cat_name_moto: "Motocykle",
        cat_name_realty: "Nieruchomości"
      },
      en: {
nav_reports: "Reports",
btn_write_seller: "Message the seller",
btn_report: "Report",
        nav_home: "Home",
        btn_share: "Share",
        btn_load_more: "Show more",
        toast_link_copied: "Link copied",
        nav_auto: "Cars",
        nav_moto: "Motorcycles",
        nav_realty: "Real Estate",
        nav_abroad: "Foreign real estate",
        abroad_title: "Foreign real estate",
        abroad_subtitle: "Apartments, houses and investments outside Poland",
        ph_search_abroad: "Country, city, description...",
        stat_abroad: "Foreign real estate",
        nav_my: "My ads",
nav_chat: "Chat",
nav_notifications: "Notifications",
nav_seller: "Seller dashboard",
        nav_fav: "Favorites",
        fav_title: "Favorites",
        fav_subtitle: "Listings you saved",
        empty_fav: "No favorites yet",
        btn_fav: "Add to favorites",
        btn_unfav: "Remove from favorites",
        btn_edit: "Edit",
        btn_boost: "Boost (24h)",
        btn_boosted: "Boosted ✓",
        btn_save: "Save changes",
        toast_fav_add: "Added to favorites",
        toast_fav_remove: "Removed from favorites",
        toast_boosted: "Listing boosted for 24h!",
        toast_editing: "Editing listing",
        toast_saved: "Changes saved",
        label_params: "Details",
        label_desc: "Description",
        active_until: "Active until",
        nav_add: "+ Post ad",
        nav_pricing: "Pricing",
        pricing_title: "Pricing",
        pricing_subtitle: "Simple and transparent prices — no hidden fees",
        pricing_private: "For private individuals",
        pricing_business: "For businesses",
        badge_popular: "Popular",
        badge_best: "Best value",
        plan_basic: "Basic listing",
        plan_basic_desc: "Perfect to quickly sell a car, motorcycle or property.",
        plan_extend: "Extension",
        plan_extend_desc: "Extend an active listing by another 15 days.",
        plan_boost: "Boost",
        plan_boost_desc: "Push your listing to the top for 24 hours.",
        per_15: "/ 15 days",
        feat_15: "✓ 15 days live",
        feat_photos: "✓ Up to 15 photos",
        feat_edit: "✓ Edit listing",
        feat_extend: "✓ +15 days",
        feat_keep: "✓ Keep your position",
        feat_top: "✓ Top of the list",
        feat_24h: "✓ Lasts 24 hours",
        feat_20photos: "✓ Up to 20 photos",
        feat_30: "✓ 30 days",
        feat_stats: "✓ Statistics",
        feat_1boost: "✓ 1 free boost",
        feat_3boost: "✓ 3 free boosts",
        biz_single: "1 listing",
        biz_single_desc: "Single business listing.",
        biz_pack5: "Pack of 5",
        biz_pack5_desc: "5 listings for 30 days — about 11.80 zł each.",
        biz_pack15: "Pack of 15",
        biz_pack15_desc: "For active sellers — about 9.93 zł each.",
        biz_pack40: "Pack of 40",
        biz_pack40_desc: "For dealerships and agencies — about 8.73 zł each.",
        btn_start: "Post an ad",
        pay_title: "Pay for listing",
        pay_subtitle: "Choose payment method (simulation)",
        pay_total: "Total",
        btn_pay: "Pay",
        pay_demo_note: "Demo only — no real charge.",
        pay_processing: "Processing payment...",
        nav_admin: "Moderation",
nav_reports: "Reports",
        admin_title: "Moderation panel",
        admin_subtitle: "Manage listings and users",
        mod_pending: "Pending",
        mod_approved: "Approved",
        mod_rejected: "Rejected",
        mod_all: "All",
        btn_approve: "Approve",
        btn_reject: "Reject",
        empty_mod: "No listings in this category",
        toast_approved: "Listing approved",
        toast_rejected: "Listing rejected",
        toast_admin_only: "Admins only",
        toast_paid: "Paid! Listing awaiting moderation",
        days: "days",
        hero_badge: "Affordable ads for everyone",
        home_title: "Buy and sell easily",
        home_subtitle: "Cars, motorcycles and real estate — all in one place",
        recent_title: "Latest listings",
        btn_add: "+ Post an ad",
        auto_title: "Cars",
        auto_subtitle: "Passenger, SUVs, commercial",
        moto_title: "Motorcycles",
        moto_subtitle: "Bikes, scooters, ATVs",
        realty_title: "Real Estate",
        realty_subtitle: "Apartments, houses, plots, commercial",
        my_title: "My listings",
        my_subtitle: "Manage your ads",
        add_title: "Post an ad",
        add_subtitle: "Fill out the form — your ad appears instantly",
        filter_search: "Search",
        filter_price_from: "Price from",
        filter_price_to: "Price to",
        filter_sort: "Sort by",
        sort_new: "Newest",
        sort_cheap: "Cheapest",
        sort_exp: "Most expensive",
        form_category: "Category",
        form_choose: "Choose...",
        cat_auto: "Cars",
        cat_moto: "Motorcycles",
        cat_realty: "Real Estate",
        form_title: "Title",
        form_price: "Price (zł)",
        form_city: "City",
        form_desc: "Description",
        form_image: "Photos",
        form_image_hint: "You can add up to 8 photos (jpg, png). They will be resized automatically.",
        toast_max_photos: "Maximum 8 photos",
        form_phone: "Contact phone *",
        form_year: "Year",
        form_mileage: "Mileage (km)",
        form_fuel: "Fuel",
        form_gearbox: "Transmission",
        form_condition: "Condition",
        form_engine: "Engine (cc)",
        form_area: "Area (m²)",
        form_rooms: "Rooms",
        form_floor: "Floor",
        form_deal: "Deal type",
        form_prop_type: "Property type",
        fuel_petrol: "Petrol",
        fuel_diesel: "Diesel",
        fuel_lpg: "LPG",
        fuel_hybrid: "Hybrid",
        fuel_electric: "Electric",
        gear_manual: "Manual",
        gear_auto: "Automatic",
        cond_new: "New",
        cond_used: "Used",
        cond_damaged: "Damaged",
        deal_sale: "Sale",
        deal_rent: "Rent",
        tab_sale: "For sale",
        tab_rent: "For rent",
        tab_all: "All",
        auth_title: "Sign up",
        auth_title_login: "Log in",
        auth_subtitle: "Create an account to post ads",
        auth_subtitle_login: "Log in to your account",
        auth_note: "You need an account to post an ad.",
        type_private: "Private individual",
        type_business: "Business",
        form_name: "Full name *",
        form_company: "Company name *",
        form_nip: "Tax ID (NIP) *",
        form_contact: "Contact person *",
        form_email: "Email *",
        form_phone_reg: "Phone *",
        form_password: "Password *",
        btn_register: "Sign up",
        btn_login: "Log in",
        btn_logout: "Log out",
        link_forgot: "Forgot password?",
        pwd_change_title: "Change password",
        pwd_forgot_title: "Password recovery",
        pwd_current: "Current password",
        pwd_new: "New password",
        pwd_confirm: "Confirm new password",
        pwd_save: "Save password",
        pwd_send_code: "Send code",
        pwd_code: "Code from email",
        pwd_reset_btn: "Set new password",
        pwd_resend: "Resend code",
        pwd_forgot_hint: "Enter account email — we will send a reset code.",
        pwd_changed: "Password changed",
        pwd_mismatch: "Passwords do not match",
        pwd_wrong_current: "Wrong current password",
        pwd_too_short: "Password min. 4 characters",
        pwd_code_sent: "Reset code generated",
        pwd_code_wrong: "Invalid code",
        pwd_code_expired: "Code expired — request a new one",
        pwd_reset_ok: "Password reset — you can log in",
        pwd_sent_demo: "Code sent (demo mode — shown locally):",
        pwd_sent_generic: "If the account exists, a code was sent to the email.",
        pwd_no_user: "Account not found",
        have_account: "Already have an account?",
        no_account: "Don't have an account?",
        btn_login_link: "Log in",
        btn_register_link: "Sign up",
        toast_register_ok: "Account created!",
        toast_login_ok: "Logged in",
        toast_login_fail: "Wrong email or password",
        toast_email_exists: "This email is already registered",
        toast_fill_required: "Please fill all required fields",
        toast_logout: "Logged out",
        prop_apartment: "Apartment",
        prop_house: "House",
        prop_plot: "Plot",
        prop_commercial: "Commercial",
        btn_publish: "Publish",
        btn_cancel: "Cancel",
        ph_search_auto: "Make, model...",
        ph_search_moto: "Make, model...",
        ph_search_realty: "City, district...",
        ph_any: "Any",
        ph_title: "e.g. Toyota Camry 2019",
        ph_city: "Warsaw",
        ph_desc: "Additional information...",
        empty_none: "No listings yet. Be the first!",
        empty_search: "Nothing found",
        empty_my: "You have no listings yet",
        empty_my_btn: "Post the first one",
        btn_call: "Call",
        btn_delete: "Delete listing",
        toast_published: "Listing published!",
        toast_deleted: "Listing deleted",
        confirm_delete: "Delete this listing?",

        nav_rules: "Rules",
        nav_privacy: "Privacy policy",
        nav_cookies: "Cookie policy",
        nav_help: "Help",
        nav_safety: "Safety tips",
        footer_info: "Information",
        privacy_title: "Privacy policy",
        privacy_subtitle: "Personal data protection (GDPR)",
        cookies_title: "Cookie policy",
        cookies_subtitle: "Cookies and local storage",
        help_title: "Help",
        help_subtitle: "FAQ and contact",
        safety_title: "Safety tips",
        safety_subtitle: "Safe deals on Handlio",
        rules_title: "Terms and posting rules",
        rules_subtitle: "Rules aligned with the laws of the Republic of Poland",
        rules_demo_note: "This is a demo version. The rules below will apply in the full Handlio service. By posting an ad you accept these terms.",
        rules_h1: "1. General provisions",
        rules_p1: "Handlio allows classified ads for cars, motorcycles and real estate. Using the service means acceptance of these terms.",
        rules_h2: "2. Legal basis",
        rules_l2a: "Polish Act on Provision of Electronic Services",
        rules_l2b: "GDPR (EU) 2016/679",
        rules_l2c: "Consumer Rights Act",
        rules_l2d: "Civil Code (sale and lease provisions)",
        rules_l2e: "AML rules where applicable",
        rules_h3: "3. Posting rules",
        rules_l3a: "You must be 18+ or act with legal guardian consent where allowed.",
        rules_l3b: "Ad content must be true and not misleading.",
        rules_l3c: "Illegal items or items from crime are prohibited.",
        rules_l3d: "One ad = one item / one property.",
        rules_l3e: "Photos must show the offered item and respect third-party rights.",
        rules_l3f: "The poster is fully responsible for ad content and communication.",
        rules_h4: "4. Prohibited content",
        rules_l4a: "Unlawful, defamatory or hate content",
        rules_l4b: "Spam, fraud, phishing",
        rules_l4c: "Actions that prevent identity verification as required by the service",
        rules_l4d: "Duplicate ads to manipulate visibility",
        rules_l4e: "IP or personal rights violations",
        rules_h5: "5. Moderation",
        rules_p5: "The administrator may refuse, hide or remove ads that breach the rules or the law.",
        rules_h6: "6. Payments",
        rules_p6: "Fees follow the price list. In the demo, payments are simulated.",
        rules_h7: "7. Personal data (GDPR)",
        rules_p7: "Data is processed to provide the classifieds service. In the demo, data stays in your browser only.",
        rules_h8: "8. Liability",
        rules_p8: "The service is not a party to deals between users. Verify the other party carefully.",
        rules_h9: "9. Real estate",
        rules_p9: "Property descriptions must be accurate. Abroad listings require selecting a country.",
        rules_h10: "10. Contact",
        rules_p10: "Contact: kontakt@handlio.pl (full version). Polish law applies.",
        form_location_type: "Location",
        loc_poland: "Poland",
        loc_abroad: "Abroad",
        form_district: "District",
        form_country: "Country",
        form_city_abroad: "City / locality",
        filter_location: "Location",
        filter_city: "City",
        filter_country: "Country",
        city_other: "Other locality (type in)",
        form_accept_rules: "I confirm that I have read the Rules and accept the posting terms. The information provided is true.",
        footer: "Handlio — demo version. Data is stored only in your browser (localStorage).",
        stat_auto: "Cars",
        stat_moto: "Motorcycles",
        stat_realty: "Real Estate",
        stat_total: "Total",
        min_ago: "min ago",footer: "Handlio — data is stored on the server in accordance with the Privacy Policy.",
        h_ago: "h ago",
        yesterday: "Yesterday",
        cat_name_auto: "Cars",
        cat_name_moto: "Motorcycles",
        cat_name_realty: "Real Estate"
      },
      ru: {
nav_reports: "Жалобы",
btn_write_seller: "Написать продавцу",
btn_report: "Пожаловаться",
        nav_home: "Главная",
        nav_auto: "Авто",
        nav_moto: "Мото",
        nav_realty: "Недвижимость",
        nav_abroad: "Зарубежная недвижимость",
        abroad_title: "Зарубежная недвижимость",
        abroad_subtitle: "Квартиры, дома и инвестиции за пределами Польши",
        ph_search_abroad: "Страна, город, описание...",
        stat_abroad: "Зарубежная недвижимость",
        nav_my: "Мои объявления",
nav_chat: "Чат",
nav_notifications: "Уведомления",
nav_seller: "Кабинет продавца",
        nav_fav: "Избранное",
        fav_title: "Избранное",
        fav_subtitle: "Сохранённые объявления",
        empty_fav: "Пока нет избранных объявлений",
        btn_fav: "В избранное",
        btn_share: "Поделиться",
        btn_load_more: "Показать ещё",
        toast_link_copied: "Ссылка скопирована",
        btn_unfav: "Убрать из избранного",
        btn_edit: "Редактировать",
        btn_boost: "Поднять (24ч)",
        btn_boosted: "Поднято ✓",
        btn_save: "Сохранить",
        toast_fav_add: "Добавлено в избранное",
        toast_fav_remove: "Удалено из избранного",
        toast_boosted: "Объявление поднято на 24ч!",
        toast_editing: "Редактирование объявления",
        toast_saved: "Изменения сохранены",
        label_params: "Параметры",
        label_desc: "Описание",
        active_until: "Активно до",
        nav_add: "+ Подать",
        nav_pricing: "Тарифы",
        pricing_title: "Тарифы",
        pricing_subtitle: "Простые и прозрачные цены — без скрытых платежей",
        pricing_private: "Для физлиц",
        pricing_business: "Для бизнеса",
        badge_popular: "Популярное",
        badge_best: "Выгоднее всего",
        plan_basic: "Базовое объявление",
        plan_basic_desc: "Чтобы быстро продать авто, мото или недвижимость.",
        plan_extend: "Продление",
        plan_extend_desc: "Продлите активное объявление ещё на 15 дней.",
        plan_boost: "Поднятие",
        plan_boost_desc: "Поднимите объявление в топ на 24 часа.",
        per_15: "/ 15 дней",
        feat_15: "✓ 15 дней размещения",
        feat_photos: "✓ До 15 фото",
        feat_edit: "✓ Редактирование",
        feat_extend: "✓ +15 дней",
        feat_keep: "✓ Сохраняется позиция",
        feat_top: "✓ Вверху списка",
        feat_24h: "✓ Действует 24 часа",
        feat_20photos: "✓ До 20 фото",
        feat_30: "✓ 30 дней",
        feat_stats: "✓ Статистика",
        feat_1boost: "✓ 1 поднятие бесплатно",
        feat_3boost: "✓ 3 поднятия бесплатно",
        biz_single: "1 объявление",
        biz_single_desc: "Одно объявление для бизнеса.",
        biz_pack5: "Пакет 5",
        biz_pack5_desc: "5 объявлений на 30 дней — ок. 11,80 zł / шт.",
        biz_pack15: "Пакет 15",
        biz_pack15_desc: "Для активных продавцов — ок. 9,93 zł / шт.",
        biz_pack40: "Пакет 40",
        biz_pack40_desc: "Для салонов и агентств — ок. 8,73 zł / шт.",
        btn_start: "Подать объявление",
        pay_title: "Оплата объявления",
        pay_subtitle: "Выберите способ оплаты (симуляция)",
        pay_total: "К оплате",
        btn_pay: "Оплатить",
        pay_demo_note: "Это демо — реальные деньги не списываются.",
        pay_processing: "Обработка платежа...",
        nav_admin: "Модерация",
nav_reports: "Жалобы",
        admin_title: "Панель модерации",
        admin_subtitle: "Управление объявлениями",
        mod_pending: "На проверке",
        mod_approved: "Одобрено",
        mod_rejected: "Отклонено",
        mod_all: "Все",
        btn_approve: "Одобрить",
        btn_reject: "Отклонить",
        empty_mod: "Нет объявлений в этой категории",
        toast_approved: "Объявление одобрено",
        toast_rejected: "Объявление отклонено",
        toast_admin_only: "Только для администратора",
        toast_paid: "Оплачено! Объявление на модерации",
        days: "дней",
        hero_badge: "Дешёвые объявления для всех",
        home_title: "Покупай и продавай просто",
        home_subtitle: "Автомобили, мотоциклы и недвижимость — всё в одном месте",
        recent_title: "Свежие объявления",
        btn_add: "+ Добавить объявление",
        auto_title: "Автомобили",
        auto_subtitle: "Легковые, внедорожники, коммерческий транспорт",
        moto_title: "Мотоциклы",
        moto_subtitle: "Мотоциклы, скутеры, квадроциклы",
        realty_title: "Недвижимость",
        realty_subtitle: "Квартиры, дома, участки, коммерческая",
        my_title: "Мои объявления",
        my_subtitle: "Управляйте своими объявлениями",
        add_title: "Подать объявление",
        add_subtitle: "Заполните форму — объявление появится сразу",
        filter_search: "Поиск",
        filter_price_from: "Цена от",
        filter_price_to: "Цена до",
        filter_sort: "Сортировка",
        sort_new: "Сначала новые",
        sort_cheap: "Дешевле",
        sort_exp: "Дороже",
        form_category: "Категория",
        form_choose: "Выберите...",
        cat_auto: "Автомобили",
        cat_moto: "Мотоциклы",
        cat_realty: "Недвижимость",
        form_title: "Заголовок",
        form_price: "Цена (zł)",
        form_city: "Город",
        form_desc: "Описание",
        form_image: "Фото",
        form_image_hint: "Можно добавить до 8 фото (jpg, png). Они будут автоматически сжаты.",
        toast_max_photos: "Максимум 8 фото",
        form_phone: "Телефон для связи *",
        form_year: "Год",
        form_mileage: "Пробег (км)",
        form_fuel: "Топливо",
        form_gearbox: "Коробка",
        form_condition: "Состояние",
        form_engine: "Объём (см³)",
        form_area: "Площадь (м²)",
        form_rooms: "Комнат",
        form_floor: "Этаж",
        form_deal: "Тип сделки",
        form_prop_type: "Тип недвижимости",
        fuel_petrol: "Бензин",
        fuel_diesel: "Дизель",
        fuel_lpg: "Газ",
        fuel_hybrid: "Гибрид",
        fuel_electric: "Электро",
        gear_manual: "Механика",
        gear_auto: "Автомат",
        cond_new: "Новый",
        cond_used: "Б/у",
        cond_damaged: "Битый",
        deal_sale: "Продажа",
        deal_rent: "Аренда",
        tab_sale: "Продажа",
        tab_rent: "Аренда",
        tab_all: "Все",
        auth_title: "Регистрация",
        auth_title_login: "Вход",
        auth_subtitle: "Зарегистрируйтесь, чтобы подавать объявления",
        auth_subtitle_login: "Войдите в свой аккаунт",
        auth_note: "Чтобы подать объявление, нужно создать аккаунт.",
        type_private: "Физлицо",
        type_business: "Юрлицо",
        form_name: "Имя и фамилия *",
        form_company: "Название компании *",
        form_nip: "NIP *",
        form_contact: "Контактное лицо *",
        form_email: "E-mail *",
        form_phone_reg: "Телефон *",
        form_password: "Пароль *",
        btn_register: "Зарегистрироваться",
        btn_login: "Войти",
        btn_logout: "Выйти",
        link_forgot: "Забыли пароль?",
        pwd_change_title: "Смена пароля",
        pwd_forgot_title: "Восстановление пароля",
        pwd_current: "Текущий пароль",
        pwd_new: "Новый пароль",
        pwd_confirm: "Повторите новый пароль",
        pwd_save: "Сохранить пароль",
        pwd_send_code: "Отправить код",
        pwd_code: "Код из письма",
        pwd_reset_btn: "Установить новый пароль",
        pwd_resend: "Отправить код ещё раз",
        pwd_forgot_hint: "Укажите e-mail аккаунта — отправим код сброса.",
        pwd_changed: "Пароль изменён",
        pwd_mismatch: "Пароли не совпадают",
        pwd_wrong_current: "Неверный текущий пароль",
        pwd_too_short: "Пароль мин. 4 символа",
        pwd_code_sent: "Код сброса сгенерирован",
        pwd_code_wrong: "Неверный код",
        pwd_code_expired: "Код истёк — запросите новый",
        pwd_reset_ok: "Пароль сброшен — можно войти",
        pwd_sent_demo: "Код отправлен (демо — показан локально):",
        pwd_sent_generic: "Если аккаунт есть, код отправлен на e-mail.",
        pwd_no_user: "Аккаунт не найден",
        have_account: "Уже есть аккаунт?",
        no_account: "Нет аккаунта?",
        btn_login_link: "Войти",
        btn_register_link: "Зарегистрироваться",
        toast_register_ok: "Аккаунт создан!",
        toast_login_ok: "Вы вошли",
        toast_login_fail: "Неверный e-mail или пароль",
        toast_email_exists: "Этот e-mail уже зарегистрирован",
        toast_fill_required: "Заполните все обязательные поля",
        toast_logout: "Вы вышли",
        prop_apartment: "Квартира",
        prop_house: "Дом",
        prop_plot: "Участок",
        prop_commercial: "Коммерческая",
        btn_publish: "Опубликовать",
        btn_cancel: "Отмена",
        ph_search_auto: "Марка, модель...",
        ph_search_moto: "Марка, модель...",
        ph_search_realty: "Город, район...",
        ph_any: "Любая",
        ph_title: "Например: Toyota Camry 2019",
        ph_city: "Варшава",
        ph_desc: "Дополнительная информация...",
        empty_none: "Пока нет объявлений. Будьте первым!",
        empty_search: "Ничего не найдено",
        empty_my: "У вас пока нет объявлений",
        empty_my_btn: "Подать первое",
        btn_call: "Позвонить",
        btn_delete: "Удалить объявление",
        toast_published: "Объявление опубликовано!",
        toast_deleted: "Объявление удалено",
        confirm_delete: "Удалить это объявление?",

        nav_rules: "Правила",
        nav_privacy: "Политика конфиденциальности",
        nav_cookies: "Политика cookies",
        nav_help: "Помощь",
        nav_safety: "Правила безопасности",
        footer_info: "Информация",
        privacy_title: "Политика конфиденциальности",
        privacy_subtitle: "Защита персональных данных (RODO/GDPR)",
        cookies_title: "Политика cookies",
        cookies_subtitle: "Файлы cookie и локальное хранение",
        help_title: "Помощь",
        help_subtitle: "Частые вопросы и контакты",
        safety_title: "Правила безопасности",
        safety_subtitle: "Безопасные сделки на Handlio",
        rules_title: "Правила публикации объявлений",
        rules_subtitle: "В соответствии с законодательством Республики Польша",
        rules_demo_note: "Это демо-версия. Ниже — правила, которые будут действовать в полной версии Handlio. Публикуя объявление, вы принимаете эти условия.",
        rules_h1: "1. Общие положения",
        rules_p1: "Handlio позволяет публиковать объявления об автомобилях, мотоциклах и недвижимости. Пользование сервисом означает принятие правил.",
        rules_h2: "2. Правовая основа",
        rules_l2a: "Закон Польши об электронных услугах",
        rules_l2b: "GDPR (EU) 2016/679",
        rules_l2c: "Закон о правах потребителя",
        rules_l2d: "Гражданский кодекс (купля-продажа, аренда)",
        rules_l2e: "Нормы AML — где применимо",
        rules_h3: "3. Правила публикации",
        rules_l3a: "Нужно быть старше 18 лет либо действовать с согласия законного представителя.",
        rules_l3b: "Содержание объявления должно быть правдивым и не вводить в заблуждение.",
        rules_l3c: "Запрещены незаконные товары и предметы преступного происхождения.",
        rules_l3d: "Одно объявление = один объект.",
        rules_l3e: "Фото должны соответствовать объекту и не нарушать права третьих лиц.",
        rules_l3f: "Автор объявления несёт полную ответственность за содержание и переписку.",
        rules_h4: "4. Запрещённый контент",
        rules_l4a: "Противоправный, клеветнический контент, разжигание ненависти",
        rules_l4b: "Спам, мошенничество, фишинг",
        rules_l4c: "Действия, мешающие предусмотренной проверке",
        rules_l4d: "Дублирование объявлений для накрутки",
        rules_l4e: "Нарушение личных прав или интеллектуальной собственности",
        rules_h5: "5. Модерация",
        rules_p5: "Администратор может отклонить, скрыть или удалить объявление, нарушающее правила или закон.",
        rules_h6: "6. Оплата",
        rules_p6: "Тарифы — по прайс-листу. В демо оплата имитируется.",
        rules_h7: "7. Персональные данные (GDPR)",
        rules_p7: "Данные обрабатываются для работы сервиса. В демо они хранятся только в браузере.",
        rules_h8: "8. Ответственность",
        rules_p8: "Сервис не является стороной сделок между пользователями. Проверяйте контрагента.",
        rules_h9: "9. Недвижимость",
        rules_p9: "Описание должно быть точным. Для объектов за рубежом нужно выбрать страну.",
        rules_h10: "10. Контакты",
        rules_p10: "kontakt@handlio.pl (полная версия). Применяется право Польши.",
        form_location_type: "Локация",
        loc_poland: "Польша",
        loc_abroad: "За границей",
        form_district: "Район",
        form_country: "Страна",
        form_city_abroad: "Город / населённый пункт",
        filter_location: "Локация",
        filter_city: "Город",
        filter_country: "Страна",
        city_other: "Другой населённый пункт",
        form_accept_rules: "Подтверждаю, что ознакомился(ась) с Правилами и принимаю условия публикации. Указанные данные достоверны.",
        footer: "Handlio — демо-версия. Данные хранятся только в вашем браузере (localStorage).",
        stat_auto: "Авто",
        stat_moto: "Мото",
        stat_realty: "Недвижимость",
        stat_total: "Всего",
        min_ago: "мин. назад",footer: "Handlio — данные хранятся на сервере в соответствии с Политикой конфиденциальности.",
        h_ago: "ч. назад",
        yesterday: "Вчера",
        cat_name_auto: "Автомобили",
        cat_name_moto: "Мотоциклы",
        cat_name_realty: "Недвижимость"
      }
    };

    // ========== CAR BRANDS & MODELS ==========
    // Полный каталог из handlio_car_catalog_olx_reference.json
    const CAR_BRANDS = {
      "Wszystkie": { models: [] },
      "Abarth": ["124","500","595","695"],
      "Acura": ["CL","CSX","ILX","Integra","MDX","NSX","RDX","RL","RLX","RSX","TL","TLX","TSX","ZDX"],
      "Aixam": ["A400","A500","A741","A751","City","Coupé","Crossline","Mega"],
      "Alfa Romeo": ["4C","Giulia","Giulietta","GT","MiTo","Stelvio","Tonale","159","166","Brera","Spider"],
      "Alpine": ["A110","A290","A310","A610"],
      "Aston Martin": ["Cygnet","DB7","DB9","DB11","DB12","DBS","DBX","Rapide","V8 Vantage","V12 Vantage","Vanquish","Valkyrie"],
      "Audi": ["80","100","A1","A2","A3","A4","A5","A6","A7","A8","Q2","Q3","Q4 e-tron","Q5","Q7","Q8","R8","RS3","RS4","RS5","RS6","RS7","S3","S4","S5","S6","S7","S8","TT","e-tron","e-tron GT","Q8 e-tron"],
      "BAIC": ["BJ20","BJ40","BJ60","X3","X5","X7"],
      "Bentley": ["Arnage","Bentayga","Continental GT","Continental GTC","Flying Spur","Mulsanne"],
      "BMW": ["Seria 1","Seria 2","Seria 3","Seria 4","Seria 5","Seria 6","Seria 7","Seria 8","X1","X2","X3","X4","X5","X6","X7","XM","Z3","Z4","i3","i4","i5","i7","i8","iX","iX1","iX3","M2","M3","M4","M5","M8"],
      "BMW Alpina": ["B3","B4","B5","B7","B8","D3","D4","D5","XD3","XD4"],
      "Buick": ["Enclave","Encore","Encore GX","Envision","LaCrosse","Regal"],
      "BYD": ["Atto 3","Dolphin","Han","Seal","Seal U","Seagull","Tang","Song Plus"],
      "Cadillac": ["ATS","CT4","CT5","CT6","CTS","DeVille","Escalade","Lyriq","SRX","XT4","XT5","XT6"],
      "Changan": ["CS35","CS55","CS75","CS85","CS95","UNI-K","UNI-T"],
      "Chery": ["Arrizo 5","Arrizo 8","Tiggo 4","Tiggo 7","Tiggo 8","Tiggo 9"],
      "Chevrolet": ["Aveo","Blazer","Camaro","Captiva","Corvette","Cruze","Epica","Impala","Lacetti","Malibu","Orlando","Spark","Suburban","Tahoe","Trax"],
      "Chrysler": ["300C","Pacifica","PT Cruiser","Sebring","Voyager"],
      "Citroën": ["Berlingo","C1","C2","C3","C3 Aircross","C4","C4 Cactus","C4 Picasso","C5","C5 Aircross","C5 X","C6","C8","DS3","Jumper","Jumpy","Nemo","Saxo","Xsara"],
      "Cupra": ["Ateca","Born","Formentor","Leon","Tavascan","Terramar"],
      "Dacia": ["Dokker","Duster","Jogger","Lodgy","Logan","Sandero","Spring"],
      "Daewoo": ["Espero","Kalos","Lanos","Leganza","Matiz","Nubira","Tacuma"],
      "Daihatsu": ["Applause","Charade","Copen","Cuore","Feroza","Materia","Move","Sirion","Terios","Trevis"],
      "Denza": ["D9","N7","N8","Z9 GT"],
      "DFSK": ["500","580","600","Fengon 5","Fengon 7","Glory 580"],
      "Dodge": ["Avenger","Caliber","Challenger","Charger","Durango","Grand Caravan","Journey","Nitro","RAM"],
      "DS Automobiles": ["DS 3","DS 4","DS 7","DS 9"],
      "DR MOTOR": ["DR 3","DR 4","DR 5","DR 6","DR 7"],
      "Fiat": ["124 Spider","500","500e","500L","500X","Bravo","Brava","Croma","Doblo","Ducato","Freemont","Grande Punto","Linea","Panda","Punto","Qubo","Scudo","Sedici","Stilo","Tipo","Ulysse"],
      "Ferrari": ["296 GTB","296 GTS","360 Modena","458 Italia","488 GTB","488 Spider","812 Superfast","California","F8 Tributo","F12berlinetta","GTC4Lusso","LaFerrari","Portofino","Roma","SF90 Stradale"],
      "Ford": ["B-Max","C-Max","EcoSport","Edge","Explorer","Fiesta","Focus","Fusion","Galaxy","Ka","Kuga","Mondeo","Mustang","Puma","Ranger","S-Max","Tourneo Connect","Tourneo Custom","Transit","Transit Connect"],
      "Forthing": ["Friday","T5 Evo","U-Tour"],
      "GAC": ["Aion","GS3","GS4","GS5","GS8","M8"],
      "Geely": ["Atlas","Coolray","Emgrand","Geometry C","Monjaro","Tugella"],
      "Genesis": ["G70","G80","G90","GV60","GV70","GV80"],
      "GMC": ["Acadia","Canyon","Hummer EV","Savana","Sierra","Terrain","Yukon"],
      "Honda": ["Accord","Civic","CR-V","CR-Z","E","FR-V","HR-V","Insight","Integra","Jazz","Legend","NSX","Odyssey","Pilot","Prelude","S2000"],
      "Hongqi": ["E-HS3","E-HS9","H5","H6","HS5","HS7"],
      "Hummer": ["H1","H2","H3","EV"],
      "Hyundai": ["Accent","Bayon","Coupe","Elantra","i10","i20","i30","i40","Ioniq","Ioniq 5","Ioniq 6","Kona","Matrix","Nexo","Santa Fe","Sonata","Staria","Terracan","Tucson","Veloster"],
      "ICH-X": ["K2","K3","K4"],
      "Ineos": ["Grenadier"],
      "Infiniti": ["EX","FX","G","JX","M","Q30","Q50","Q60","QX30","QX50","QX60","QX70","QX80"],
      "Iveco": ["Daily","Massif"],
      "Isuzu": ["D-Max","MU-X","Trooper"],
      "Jaecoo": ["J7","J8"],
      "Jaguar": ["E-Pace","F-Pace","F-Type","I-Pace","S-Type","XE","XF","XJ","XK"],
      "Jeep": ["Avenger","Cherokee","Commander","Compass","Gladiator","Grand Cherokee","Patriot","Renegade","Wrangler"],
      "Kia": ["Carens","Carnival","Ceed","Cerato","EV3","EV6","EV9","Niro","Optima","Picanto","ProCeed","Rio","Sorento","Soul","Sportage","Stinger","Stonic","Venga","XCeed"],
      "Lada": ["Niva","Niva Travel","Granta","Kalina","Largus","Priora","Samara","Vesta"],
      "Lamborghini": ["Aventador","Countach","Gallardo","Huracán","Revuelto","Urus"],
      "Lancia": ["Delta","Flavia","Lybra","Musa","Phedra","Thema","Ypsilon"],
      "Land Rover": ["Defender","Discovery","Discovery Sport","Freelander","Range Rover","Range Rover Evoque","Range Rover Sport","Range Rover Velar"],
      "Leapmotor": ["C10","C11","C16","T03"],
      "Lexus": ["CT","ES","GS","GX","IS","LBX","LC","LM","LS","LX","NX","RC","RX","RZ","UX"],
      "Ligier": ["JS50","JS60","Myli","X-Too"],
      "Lincoln": ["Aviator","Corsair","MKC","MKX","MKZ","Nautilus","Navigator"],
      "Lotus": ["Eletre","Emira","Evora","Exige","Elise"],
      "Lucid": ["Air","Gravity"],
      "Lynk & Co": ["01","02","03","05","06","07","08","09"],
      "Maextro": ["S800","M800"],
      "Maserati": ["Ghibli","GranCabrio","GranTurismo","Grecale","Levante","MC20","Quattroporte"],
      "Maxus": ["D60","D90","Euniq 5","Euniq 6","Mifa 7","Mifa 9","T60"],
      "Mazda": ["2","3","5","6","CX-3","CX-30","CX-5","CX-60","CX-80","CX-90","MX-3","MX-5","MX-30","RX-7","RX-8"],
      "McLaren": ["570S","600LT","650S","675LT","720S","750S","765LT","Artura","GT","P1"],
      "Mercedes-Benz": ["Klasa A","Klasa B","Klasa C","Klasa E","Klasa S","Klasa CLA","Klasa CLS","Klasa CLE","Klasa CLK","Klasa G","Klasa GLA","Klasa GLB","Klasa GLC","Klasa GLE","Klasa GLS","Klasa M","Klasa R","Klasa SL","Klasa SLC","Klasa V","Klasa X","AMG GT","EQA","EQB","EQC","EQE","EQS","EQV","Sprinter","Vito"],
      "MG": ["3","4","5","6","Cyberster","EHS","HS","Marvel R","MG ZS","MG ZS EV"],
      "Microcar": ["Due","M.Go","MC1","MC2"],
      "MINI": ["Clubman","Cooper","Countryman","Coupe","Paceman","Roadster"],
      "Mitsubishi": ["ASX","Colt","Eclipse Cross","Galant","Grandis","L200","Lancer","Outlander","Pajero","Pajero Sport","Space Star"],
      "Nissan": ["200SX","350Z","370Z","Almera","Ariya","Juke","Leaf","Micra","Murano","Navara","Note","Pathfinder","Patrol","Primera","Qashqai","X-Trail","Z"],
      "Omoda": ["5","E5","7"],
      "Opel": ["Adam","Agila","Ampera","Antara","Astra","Combo","Corsa","Crossland","Frontera","Grandland","Insignia","Karl","Meriva","Mokka","Movano","Omega","Signum","Tigra","Vivaro","Zafira"],
      "Peugeot": ["106","107","108","2008","206","207","208","3008","301","307","308","407","408","508","5008","607","807","Bipper","Boxer","Expert","Partner","Rifter","Traveller"],
      "Polonez": ["Atu","Caravan","Caro","Coupé","Truck"],
      "Pontiac": ["Firebird","GTO","Grand Prix","Solstice","Trans Am","Vibe"],
      "Porsche": ["718 Boxster","718 Cayman","911","918 Spyder","Cayenne","Macan","Panamera","Taycan"],
      "RAM": ["1500","2500","3500","ProMaster"],
      "Renault": ["Arkana","Austral","Captur","Clio","Espace","Fluence","Grand Scenic","Kadjar","Kangoo","Koleos","Laguna","Latitude","Master","Megane","Modus","Scenic","Talisman","Trafic","Twingo","Twizy","Zoe"],
      "Rolls-Royce": ["Cullinan","Dawn","Ghost","Phantom","Spectre","Wraith"],
      "Rover": ["25","45","75","100","200","400","600","800"],
      "Saab": ["9-3","9-5","9-7X","900","9000"],
      "SEAT": ["Alhambra","Altea","Arona","Arosa","Ateca","Cordoba","Exeo","Ibiza","Leon","Mii","Tarraco","Toledo"],
      "Škoda": ["Citigo","Fabia","Kamiq","Karoq","Kodiaq","Octavia","Rapid","Scala","Superb","Yeti","Enyaq","Roomster"],
      "Smart": ["ForFour","ForTwo","#1","#3","Roadster"],
      "SsangYong / KGM": ["Actyon","Korando","Musso","Rexton","Rodius","Tivoli","Torres"],
      "Subaru": ["BRZ","Crosstrek","Forester","Impreza","Justy","Legacy","Levorg","Outback","Solterra","Tribeca","WRX","XV"],
      "Suzuki": ["Across","Alto","Baleno","Celerio","Grand Vitara","Ignis","Jimny","Kizashi","S-Cross","Samurai","Swift","SX4","Vitara","Wagon R+"],
      "SWM": ["G01","G01F","G03","G05"],
      "Tesla": ["Model 3","Model S","Model X","Model Y","Cybertruck","Roadster"],
      "Toyota": ["4Runner","Auris","Aygo","Aygo X","Avensis","C-HR","Camry","Corolla","Corolla Cross","FJ Cruiser","GR86","GR Yaris","Highlander","Hilux","Land Cruiser","Mirai","Prius","Proace","RAV4","Sequoia","Supra","Tacoma","Tundra","Urban Cruiser","Verso","Yaris","Yaris Cross"],
      "Volkswagen": ["Amarok","Arteon","Beetle","Bora","Caddy","CC","Crafter","Eos","Fox","Golf","Golf Plus","Golf Sportsvan","ID.3","ID.4","ID.5","ID.7","ID.Buzz","Jetta","Lupo","Multivan","Passat","Phaeton","Polo","Scirocco","Sharan","Taigo","T-Cross","T-Roc","Tiguan","Touareg","Touran","Transporter","Up!"],
      "Volvo": ["C30","C40","C70","EX30","EX40","EX90","S40","S60","S70","S80","S90","V40","V50","V60","V70","V90","XC40","XC60","XC70","XC90"],
      "XPeng": ["G3","G6","G9","P5","P7","X9"],
      "ZEEKR": ["001","007","009","X"],
      "Zhidou": ["D1","D2","D3"],
      "Chery Fulwin": ["T6","T8"],
      "Pozostałe osobowe": []
    };

    // ========== MOTO BRANDS & MODELS ==========
    // Полный каталог из handlio_motorcycle_catalog_olx_reference.json
    const MOTO_BRANDS = {
      "Wszystkie": { models: [] },
      "Aprilia": ["Caponord","Dorsoduro","Mana","RS 50","RS 125","RS 250","RS 660","RSV4","RX","SX","Shiver","SR","Tuareg","Tuono","Pegaso"],
      "Benelli": ["502C","502S","752S","Leoncino 500","Leoncino 800","TRK 251","TRK 502","TRK 502 X","TRK 702","TRK 800","TNT 125","TNT 300","TNT 600","Tornado 500","Tornado 900"],
      "Beta": ["Alp","Evo","RR 2T","RR 4T","RR Racing","Xtrainer","Minitrial"],
      "Barton": ["Classic","Duel","DuelX","Flash","Fighter","Hyper","Ninja","Travel","Fighter 50"],
      "BMW Motorrad": ["C 400 GT","C 400 X","C 650 GT","C 650 Sport","CE 02","CE 04","F 650 GS","F 700 GS","F 750 GS","F 800 GS","F 800 R","F 850 GS","F 900 GS","F 900 R","F 900 XR","G 310 GS","G 310 R","G 310 RR","G 450 X","G 650 GS","K 100","K 1100","K 1200 GT","K 1200 R","K 1200 RS","K 1200 S","K 1300 GT","K 1300 R","K 1300 S","K 1600 B","K 1600 GT","K 1600 GTL","M 1000 R","M 1000 RR","M 1000 XR","R 100","R 1100 GS","R 1100 R","R 1100 RS","R 1150 GS","R 1150 R","R 1150 RT","R 1200 C","R 1200 GS","R 1200 R","R 1200 RT","R 1200 S","R 1250 GS","R 1250 R","R 1250 RS","R 1250 RT","R 1300 GS","R 1300 GS Adventure","R 18","R nineT","S 1000 R","S 1000 RR","S 1000 XR"],
      "BSA": ["Gold Star","M20","Rocket Gold Star"],
      "Buell": ["Firebolt","Lightning","Ulysses","XB9","XB12"],
      "Can-Am": ["Outlander","Renegade","Maverick","Spyder F3","Spyder RT","Ryker"],
      "CFMoto": ["300NK","300SR","450CL-C","450MT","450SR","650MT","650NK","650GT","700CL-X","700MT","800MT","800NK","800SR","1250TR-G"],
      "Ducati": ["Diavel","Hypermotard","Hyperstrada","Monster","Multistrada","Panigale V2","Panigale V4","Scrambler","Streetfighter","SuperSport","DesertX","Desmosedici","748","749","848","916","996","998","999","1098","1198"],
      "Fantic": ["Caballero","XEF","XMF"],
      "GasGas": ["EC 125","EC 250","EC 300","EC 350","EC 450","MC 125","MC 250","MC 350","MC 450","SM 125","SM 700"],
      "Generic": ["Trigger","Sirion","Worx"],
      "Gilera": ["Runner","Nexus","Fuoco","DNA"],
      "Harley-Davidson": ["Electra Glide","Fat Boy","Fat Bob","Forty-Eight","Heritage Softail","Iron 883","Low Rider","Night Rod","Pan America","Road Glide","Road King","Softail","Sport Glide","Sportster","Street Bob","Street Glide","Street Rod","V-Rod","Wide Glide","Breakout"],
      "Honda": ["Africa Twin","CB125F","CB300R","CB500F","CB500X","CB650R","CB750 Hornet","CB1000R","CB1100","CB1300","CBR125R","CBR250R","CBR500R","CBR600F","CBR600RR","CBR650R","CBR900RR","CBR1000RR","CBR1000RR-R","CRF250L","CRF300L","CRF450L","CRF450R","CRF1100L Africa Twin","Forza 125","Forza 300","Forza 350","Forza 750","Gold Wing","Hornet 600","Integra","NC700S","NC700X","NC750S","NC750X","NT1100","Pan European","Rebel 300","Rebel 500","Rebel 1100","Shadow","SH125","SH150","SH300","SH350","ST125 Dax","VFR750","VFR800","VFR1200F","VFR1200X Crosstourer","VT750 Shadow","X-ADV","XL700V Transalp","XL750 Transalp","XRV750 Africa Twin"],
      "Honda/Polska": ["C 50","Monkey","Super Cub"],
      "Husqvarna": ["701 Enduro","701 Supermoto","FE 250","FE 350","FE 450","FE 501","FC 250","FC 350","FC 450","FS 450","TE 150","TE 250","TE 300","TC 125","TC 250","Vitpilen 125","Vitpilen 401","Vitpilen 701","Svartpilen 125","Svartpilen 401","Svartpilen 701"],
      "Indian": ["Chief","Challenger","Chieftain","FTR","Pursuit","Roadmaster","Scout","Springfield"],
      "Indian Motorcycle": ["Scout","Scout Bobber","Chief","Chief Bobber","Challenger","Chieftain","FTR","Pursuit","Roadmaster","Springfield"],
      "Jawa": ["50 Mustang","50 Pionyr","125","175","250","350","660","Californian","Perak","Pérák","RVM 500","Jawa 300 CL"],
      "Junak": ["M07","M10","M11","M12","M16","M20","901","902","123"],
      "Kawasaki": ["Eliminator","ER-5","ER-6f","ER-6n","H2","KDX","KLE 500","KLR 650","KLV 1000","KX 65","KX 85","KX 100","KX 125","KX 250","KX 450","Ninja 125","Ninja 250","Ninja 300","Ninja 400","Ninja 500","Ninja 650","Ninja 1000SX","Ninja H2","Ninja H2 SX","Versys 300","Versys 650","Versys 1000","Vulcan 500","Vulcan 650","Vulcan 900","Vulcan 1700","W 800","Z 125","Z 300","Z 400","Z 650","Z 750","Z 800","Z 900","Z 1000","ZX-6R","ZX-7R","ZX-9R","ZX-10R","ZX-12R","ZX-14R"],
      "Keeway": ["Benelli RKV 125","Cityblade","K-Light","RKF 125","Superlight","Vieste","X-Light"],
      "Komar": ["230","231","232","2330","2350","2361","2375"],
      "KTM": ["50 SX","65 SX","85 SX","125 Duke","125 SX","150 SX","200 Duke","250 Duke","250 EXC","250 SX-F","300 EXC","350 EXC-F","350 SX-F","390 Adventure","390 Duke","450 EXC-F","450 SX-F","500 EXC-F","525 EXC","690 Enduro R","690 SMC R","790 Adventure","790 Duke","890 Adventure","890 Duke","990 Adventure","990 Duke","1050 Adventure","1090 Adventure","1190 Adventure","1290 Super Adventure","1290 Super Duke R","1390 Super Duke R","RC 125","RC 200","RC 390","RC 8C"],
      "Kymco": ["Agility 50","Agility 125","AK 550","AK Premium","Downtown 125","Downtown 300","Downtown 350","Grand Dink","Like 50","Like 125","People 125","People 150","People 250","People S 300","Super Dink 125","Super Dink 300","X-Town 125","X-Town 300","X-Town 400","Xciting 400","MXU 300","MXU 500"],
      "Loncin": ["LX 300","Voge 300","Voge 500","Voge 525","Voge 650","Voge 900"],
      "Malaguti": ["Dune 125","Drakon 125","Madison 125","Mission 125","XSM 125","XTM 125"],
      "Motobi": ["250","Imperiale"],
      "Motorhispania": ["Furia","MH7","Ryz","Duna"],
      "MV Agusta": ["Brutale 675","Brutale 800","Brutale 1000","Dragster 800","F3 675","F3 800","F3 1000","Rush","Superveloce","Turismo Veloce"],
      "Peugeot Motocycles": ["Kisbee","Tweet","Pulsion","Django","Metropolis","XP400"],
      "Piaggio": ["Beverly 125","Beverly 300","Beverly 350","Beverly 400","Beverly 500","Liberty 50","Liberty 125","Liberty 150","Medley 125","Medley 150","Medley 200","MP3 300","MP3 400","MP3 500","MP3 530","Typhoon","Vespa GTS","Vespa Primavera","Vespa Sprint","Vespa PX"],
      "QJMotor": ["ATR 125","Fort 350","LTS 700","MTX 125","SRT 550","SRT 700","SRK 125","SRK 400","SRK 600","SRK 700","SRK 800","SRV 300","SRV 550","SRV 700"],
      "Rieju": ["MRT 50","MRT 125","RS3","Tango","Aventura","MR 125","Marathon"],
      "Romet": ["125 Division","ADV 125","Classic 400","Division 250","K 125","K125","Ogar 50","Pony","Pony 301","ZK 50","ZXT 125","Soft Chopper","Scrambler 125"],
      "Royal Enfield": ["Bullet 350","Classic 350","Continental GT 650","Himalayan","Himalayan 450","Hunter 350","Interceptor 650","Meteor 350","Shotgun 650","Scram 411","Super Meteor 650"],
      "SHL": ["M04","M05","M06","M11","M17","M17 Gazela"],
      "Simson": ["S 50","S 51","S 53","S 70","SR 1","SR 2","SR 50","Schwalbe KR51","Awo 425"],
      "Stark": ["Varg"],
      "Sur-Ron": ["Light Bee","Light Bee X","Ultra Bee","Storm Bee"],
      "Suzuki": ["Address 110","B-King","Bandit 600","Bandit 650","Bandit 750","Bandit 1200","Bandit 1250","Burgman 125","Burgman 200","Burgman 400","Burgman 650","DL 650 V-Strom","DL 1000 V-Strom","DL 1050 V-Strom","DR-Z400","DR 650","DR 800","GS 500","GSX-R 600","GSX-R 750","GSX-R 1000","GSX-S 750","GSX-S 1000","Hayabusa","Intruder 600","Intruder 800","Intruder 1500","Katana","SV 650","SV 1000","V-Strom 250","V-Strom 650","V-Strom 800","V-Strom 1000","V-Strom 1050"],
      "SYM": ["Cruisym 125","Cruisym 300","Fiddle 50","Fiddle 125","Jet 14","Jet 14 200","Joymax 125","Joymax 300","Joymax Z+ 300","Maxsym 400","Maxsym TL 508","NH-T 125","Symphony 50","Symphony 125","Symphony ST 125"],
      "Talaria": ["Sting","Sting R","Dragon"],
      "Triumph": ["Bonneville","Bonneville Bobber","Bonneville Speedmaster","Daytona 675","Daytona 660","Rocket 3","Scrambler 400 X","Scrambler 900","Scrambler 1200","Speed 400","Speed Triple","Speed Triple 1200 RS","Speed Twin 900","Speed Twin 1200","Street Cup","Street Scrambler","Street Triple","Tiger 660","Tiger 850","Tiger 900","Tiger 1200","Trident 660"],
      "Ural": ["Gear Up","Retro","CT","Wolf","M 61","M 62","M 63","M 67"],
      "Vespa": ["ET2","ET4","GTS 125","GTS 250","GTS 300","GTS 310","GTV 300","LX 50","LX 125","Primavera 50","Primavera 125","Primavera 150","Sprint 50","Sprint 125","Sprint 150"],
      "Victory": ["Cross Country","Cross Roads","Hammer","High-Ball","Judge","Kingpin","Vegas","Vision"],
      "Voge": ["300AC","300DS","300R","500AC","500DS","525ACX","525DSX","650DSX","650R","900DSX"],
      "WFM": ["M06","M06L","M06-64","M07","M08","M50 Osa","M52","M06 T"],
      "WSK": ["125","125 B3","125 B4","175","175 M06","175 Kobuz","M21 W2","M06 B3"],
      "Yamaha": ["Aerox","Bolt","BW's","FJR1300","FZ6","FZ8","Fazer 600","Fazer 800","Grizzly","MT-03","MT-07","MT-09","MT-10","NMAX 125","NMAX 155","R1","R3","R6","R7","R125","R15","RayZR","SCR950","Tenere 700","Tenere 1200","Tracer 700","Tracer 900","Tracer 9","TW125","TMAX 500","TMAX 530","TMAX 560","Tricity 125","Tricity 300","V Max 1200","V Max 1700","Virago 535","Virago 750","Virago 1100","WR125","WR250","WR450F","XJ6","XJR1300","XSR700","XSR900","YZ125","YZ250","YZ250F","YZ450F","YZF-R125","YZF-R3"],
      "Zero": ["DS","FX","FXS","SR","S","DSe","XE","SRS"],
      "Zhejiang": ["Junak","Moto Guzzi"],
      "Zipp": ["Quantum","VZ-2","Steed","VZ-5"],
      "Zontes": ["125 G1","125 U","125 GK","310 R","310 T","350 GK","350 R","350 T","350 E","ZT 125"],
      "Pozostałe": ["M 72","Dniepr","K-750","MZ ETZ 150","MZ ETZ 250","MZ TS 250","NSU","Norton 16H","AWO 425","CZ 125","CZ 175","CZ 250","CZ 350"]
    };

    let selectedBrandAuto = 'Wszystkie';
    let selectedModelsAuto = new Set();
    let selectedBrandMoto = 'Wszystkie';
    let selectedModelsMoto = new Set();
    let pendingBrandSelection = 'Wszystkie';
    let pendingModelSelection = new Set();

    // ========== BRAND DROPDOWN ==========
    function toggleBrandDropdown(category) {
      const dropdown = document.getElementById(category + '-brand-dropdown');
      const isOpen = dropdown.classList.contains('open');
      
      document.querySelectorAll('.brand-dropdown').forEach(d => d.classList.remove('open'));
      
      if (!isOpen) {
        dropdown.classList.add('open');
        renderBrandList(category);
        setTimeout(() => {
          document.getElementById(category + '-brand-search')?.focus();
        }, 100);
      }
    }

    function getBrands(category) {
      return category === 'auto' ? CAR_BRANDS : MOTO_BRANDS;
    }

    function getSelectedBrand(category) {
      return category === 'auto' ? selectedBrandAuto : selectedBrandMoto;
    }

    function setSelectedBrand(category, brand) {
      if (category === 'auto') {
        selectedBrandAuto = brand;
      } else {
        selectedBrandMoto = brand;
      }
    }

    function getSelectedModels(category) {
      return category === 'auto' ? selectedModelsAuto : selectedModelsMoto;
    }

    function setSelectedModels(category, models) {
      if (category === 'auto') {
        selectedModelsAuto = models;
      } else {
        selectedModelsMoto = models;
      }
    }

    function escJs(s) {
      return String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    }
    function renderBrandList(category) {
      const list = document.getElementById(category + '-brand-list');
      const search = document.getElementById(category + '-brand-search')?.value.toLowerCase() || '';
      const brandsData = getBrands(category);
      
      const brands = Object.keys(brandsData).filter(b => 
        b.toLowerCase().includes(search) || b === 'Wszystkie'
      );
      
      const counts = {};
      ads.forEach(ad => {
        if (ad.category === category && (ad.status || 'approved') === 'approved') {
          const brand = ad.brand || 'Inne';
          counts[brand] = (counts[brand] || 0) + 1;
        }
      });
      
      const selectedBrand = getSelectedBrand(category);
      
      list.innerHTML = brands.map(brand => {
        const count = brand === 'Wszystkie' ? ads.filter(a => a.category === category && (a.status || 'approved') === 'approved').length : (counts[brand] || 0);
        const isSelected = brand === selectedBrand;
        return `
          <div class="brand-item ${isSelected ? 'selected' : ''}" data-action="select-brand" data-cat="${category}" data-brand="${escapeAttr(brand)}">
            <span>${brand}</span>
            <span class="count">${count}</span>
          </div>
        `;
      }).join('');
    }

    function filterBrands(category) {
      renderBrandList(category);
    }

    function selectBrand(category, brand) {
      setSelectedBrand(category, brand);
      pendingBrandSelection = brand;
      
      const labelMap = {
        'auto': 'auto-brand-label',
        'moto': 'moto-brand-label'
      };
      document.getElementById(labelMap[category]).textContent = brand === 'Wszystkie' ? 'Wszystkie marki' : brand;
      
      document.getElementById(category + '-brand-dropdown').classList.remove('open');
      
      const brandsData = getBrands(category);
      const models = brandsData[brand] || [];
      setSelectedModels(category, new Set());
      
      const modelLabelMap = {
        'auto': 'auto-model-label',
        'moto': 'moto-model-label'
      };
      document.getElementById(modelLabelMap[category]).textContent = models.length > 0 ? 'Wybierz model' : 'Wszystkie modele';
      
      renderCategory(category);
    }

    // ========== MODEL MODAL ==========
    let modelModalCategory = 'auto';

    function openModelModal(category) {
      modelModalCategory = category || 'auto';
      const modal = document.getElementById('model-modal');
      modal.classList.add('open');
      
      const selectedBrand = getSelectedBrand(modelModalCategory);
      const pickTitle = currentLang === 'en' ? 'Select models' : currentLang === 'ru' ? 'Выбор моделей' : 'Wybierz modele';
      const pickSub = currentLang === 'en' ? 'Select models to display' : currentLang === 'ru' ? 'Отметьте модели для показа' : 'Zaznacz modele, które chcesz wyświetlić';
      document.getElementById('model-modal-title').textContent = pickTitle + ' - ' + selectedBrand;
      document.getElementById('model-modal-subtitle').textContent = pickSub;
      
      const currentModels = getSelectedModels(modelModalCategory);
      pendingModelSelection = new Set(currentModels);
      
      renderModelList(modelModalCategory);
      document.getElementById('model-search').value = '';
    }

    function renderModelList(category) {
      const list = document.getElementById('model-list');
      const search = document.getElementById('model-search')?.value.toLowerCase() || '';
      const brandsData = getBrands(category);
      const selectedBrand = getSelectedBrand(category);
      
      const models = brandsData[selectedBrand] || [];
      const filtered = models.filter(m => m.toLowerCase().includes(search));
      
      if (filtered.length === 0) {
        list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted)">Brak modeli dla tej marki</div>';
        return;
      }
      
      list.innerHTML = filtered.map(model => {
        const checked = pendingModelSelection.has(model) ? 'checked' : '';
        const count = ads.filter(a => a.category === category && a.model === model && (a.status || 'approved') === 'approved').length;
        return `
          <div class="model-item" data-action="toggle-model" data-model="${escapeAttr(model)}">
            <input type="checkbox" ${checked} data-action="toggle-model" data-model="${escapeAttr(model)}">
            <span class="model-name">${model}</span>
            <span class="model-count">${count}</span>
          </div>
        `;
      }).join('');
    }

    function filterModels() {
      const category = modelModalCategory;
      renderModelList(category);
    }

    function toggleModel(model) {
      if (pendingModelSelection.has(model)) {
        pendingModelSelection.delete(model);
      } else {
        pendingModelSelection.add(model);
      }
      const category = modelModalCategory;
      renderModelList(category);
    }

    function selectAllModels() {
      const category = modelModalCategory;
      const brandsData = getBrands(category);
      const selectedBrand = getSelectedBrand(category);
      const models = brandsData[selectedBrand] || [];
      models.forEach(m => pendingModelSelection.add(m));
      renderModelList(category);
    }

    function deselectAllModels() {
      pendingModelSelection.clear();
      const category = modelModalCategory;
      renderModelList(category);
    }

    function applyModelSelection() {
      const category = modelModalCategory;
      setSelectedModels(category, new Set(pendingModelSelection));
      
      const brandsData = getBrands(category);
      const selectedBrand = getSelectedBrand(category);
      const models = brandsData[selectedBrand] || [];
      const selected = getSelectedModels(category);
      
      const modelLabelMap = {
        'auto': 'auto-model-label',
        'moto': 'moto-model-label'
      };
      
      if (selected.size === 0) {
        document.getElementById(modelLabelMap[category]).textContent = 'Wszystkie modele';
      } else if (selected.size === models.length) {
        document.getElementById(modelLabelMap[category]).textContent = 'Wszystkie modele';
      } else if (selected.size === 1) {
        document.getElementById(modelLabelMap[category]).textContent = selected.values().next().value;
      } else {
        document.getElementById(modelLabelMap[category]).textContent = selected.size + ' modele';
      }
      
      closeModelModal();
      renderCategory(category);
    }

    function closeModelModal(e) {
      // e optional — when from data-action delegation, just close
      if (e && e.target && e.currentTarget && e.target !== e.currentTarget && !(e.target.classList && e.target.classList.contains('modal-close'))) return;
      const modal = document.getElementById('model-modal');
      if (modal) modal.classList.remove('open');
    }

    document.addEventListener('click', function(e) {
      document.querySelectorAll('.brand-selector').forEach(selector => {
        if (!selector.contains(e.target)) {
          const dropdown = selector.querySelector('.brand-dropdown');
          if (dropdown) dropdown.classList.remove('open');
        }
      });
    });

    // ========== AUTO TITLE GENERATION ==========
    function populateAutoBrands() {
      const select = document.getElementById('f-auto-brand');
      const brands = Object.keys(CAR_BRANDS).filter(b => b !== 'Wszystkie').sort();
      select.innerHTML = '<option value="">Wybierz markę...</option>';
      brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        select.appendChild(option);
      });
    }

    function updateAutoModels() {
      const brand = document.getElementById('f-auto-brand').value;
      const modelSelect = document.getElementById('f-auto-model');
      modelSelect.innerHTML = '<option value="">Wybierz model...</option>';
      
      if (brand && CAR_BRANDS[brand]) {
        const models = CAR_BRANDS[brand];
        models.forEach(model => {
          const option = document.createElement('option');
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
        });
      }
    }

    function generateAutoTitle() {
      const brand = document.getElementById('f-auto-brand')?.value || '';
      const model = document.getElementById('f-auto-model')?.value || '';
      const year = document.getElementById('f-year-auto')?.value || '';
      const city = (document.getElementById('f-city')?.value || '').trim();
      
      const preview = document.getElementById('auto-title-text');
      const hidden = document.getElementById('f-title');
      if (!preview || !hidden) return;
      
      if (brand && model && year) {
        let title = brand + ' ' + model + ' ' + year;
        if (city) title += ' · ' + city;
        preview.textContent = title;
        hidden.value = title.slice(0, 120);
        preview.style.color = 'var(--primary-hover)';
      } else {
        preview.textContent = 'Wybierz markę, model i rok';
        hidden.value = '';
        preview.style.color = 'var(--muted)';
      }
    }

    // ========== MOTO TITLE GENERATION ==========
    function populateMotoBrands() {
      const select = document.getElementById('f-moto-brand');
      const brands = Object.keys(MOTO_BRANDS).filter(b => b !== 'Wszystkie').sort();
      select.innerHTML = '<option value="">Wybierz markę...</option>';
      brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        select.appendChild(option);
      });
    }

    function updateMotoModels() {
      const brand = document.getElementById('f-moto-brand').value;
      const modelSelect = document.getElementById('f-moto-model');
      modelSelect.innerHTML = '<option value="">Wybierz model...</option>';
      
      if (brand && MOTO_BRANDS[brand]) {
        const models = MOTO_BRANDS[brand];
        models.forEach(model => {
          const option = document.createElement('option');
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
        });
      }
    }

    function generateMotoTitle() {
      const brand = document.getElementById('f-moto-brand')?.value || '';
      const model = document.getElementById('f-moto-model')?.value || '';
      const year = document.getElementById('f-year-moto')?.value || '';
      const city = (document.getElementById('f-city-moto')?.value || '').trim();
      
      const preview = document.getElementById('moto-title-text');
      const hidden = document.getElementById('f-title-moto');
      if (!preview || !hidden) return;
      
      if (brand && model && year) {
        let title = brand + ' ' + model + ' ' + year;
        if (city) title += ' · ' + city;
        preview.textContent = title;
        hidden.value = title.slice(0, 120);
        preview.style.color = 'var(--primary-hover)';
      } else {
        preview.textContent = 'Wybierz markę, model i rok';
        hidden.value = '';
        preview.style.color = 'var(--muted)';
      }
    }

    function generateRealtyTitle() {
      const propType = document.getElementById('f-prop-type')?.value || '';
      const area = document.getElementById('f-area')?.value || '';
      const rooms = document.getElementById('f-rooms')?.value || '';
      const deal = document.getElementById('f-deal')?.value || '';
      const floor = document.getElementById('f-floor')?.value || '';
      let city = '';
      if (typeof getRealtyCityValue === 'function') {
        city = getRealtyCityValue() || '';
      } else {
        city = document.getElementById('f-city-realty')?.value || '';
        if (city === '__other__') {
          city = document.getElementById('f-city-realty-other')?.value || '';
        }
      }
      const country = document.getElementById('f-country')?.value || '';
      const preview = document.getElementById('realty-title-text');
      const hidden = document.getElementById('f-title-realty');
      if (!preview || !hidden) return;

      const propLabels = {
        apartment: { pl: 'Mieszkanie', en: 'Apartment', ru: 'Квартира' },
        house: { pl: 'Dom', en: 'House', ru: 'Дом' },
        plot: { pl: 'Działka', en: 'Plot', ru: 'Участок' },
        commercial: { pl: 'Lokal użytkowy', en: 'Commercial', ru: 'Коммерция' }
      };
      const dealLabels = {
        sale: { pl: 'sprzedaż', en: 'sale', ru: 'продажа' },
        rent: { pl: 'wynajem', en: 'rent', ru: 'аренда' }
      };
      const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'pl';
      const parts = [];
      if (propType && propLabels[propType]) {
        parts.push(propLabels[propType][lang] || propLabels[propType].pl);
      }
      if (rooms) {
        const r = Number(rooms);
        if (lang === 'ru') parts.push(r + ' комн.');
        else if (lang === 'en') parts.push(r + (r === 1 ? ' room' : ' rooms'));
        else parts.push(r + (r === 1 ? ' pokój' : r < 5 ? ' pokoje' : ' pokoi'));
      }
      if (area) parts.push(String(area).replace('.', ',') + ' m²');
      if (floor !== '' && propType === 'apartment') {
        if (lang === 'ru') parts.push(floor + ' эт.');
        else if (lang === 'en') parts.push('fl. ' + floor);
        else parts.push(floor + ' piętro');
      }
      if (city) parts.push('· ' + city);
      else if (country) parts.push('· ' + country);
      if (deal && dealLabels[deal]) {
        parts.push('— ' + (dealLabels[deal][lang] || dealLabels[deal].pl));
      }

      if (propType && area) {
        const title = parts.join(' ');
        preview.textContent = title;
        hidden.value = title.slice(0, 120);
        preview.style.color = 'var(--primary-hover)';
      } else {
        preview.textContent = lang === 'ru'
          ? 'Выберите тип и площадь'
          : lang === 'en'
            ? 'Select type and area'
            : 'Wybierz typ, powierzchnię i liczbę pokoi';
        hidden.value = '';
        preview.style.color = 'var(--muted)';
      }
    }

    // ========== MAIN APP CODE ==========
    let currentLang = (() => { try { return localStorage.getItem('handlio_lang') || 'pl'; } catch (e) { return 'pl'; } })();

    const EXTRA_I18N = {
      pl: {
        filter_brand:'Marka', filter_model:'Model', filter_year_from:'Rok od', filter_year_to:'Rok do',
        filter_fuel:'Paliwo', filter_gearbox:'Skrzynia', filter_area_from:'Powierzchnia od', filter_area_to:'Powierzchnia do', filter_rooms:'Liczba pokoi',
        filter_prop_type:'Typ nieruchomości', sort_popular:'Najpopularniejsze', btn_advanced:'⚙️ Rozszerzone',
        toast_delete_forbidden:'Nie masz uprawnień do usunięcia tego ogłoszenia',
        toast_edit_forbidden:'Nie masz uprawnień do edycji tego ogłoszenia',
        toast_boost_forbidden:'Nie masz uprawnień do podbicia tego ogłoszenia',
        ph_search_generic:'Szukaj...', ph_brand:'Szukaj marki...', all_poland:'Cała Polska', all_brands:'Wszystkie marki', all_models:'Wszystkie modele',     filter_all: 'Wszystkie',     spec_energy: 'Klasa energetyczna',     spec_beach: 'Odległość od plaży (m)',     spec_beach_max: 'Max. do plaży (m)',     spec_rental_yield: 'Rentowność najmu (% / rok)',     spec_yield_min: 'Min. rentowność %',     acc_params: 'Parametry techniczne',     acc_condition: 'Stan pojazdu',     acc_realty: 'Parametry nieruchomości',     acc_abroad: 'Parametry zagraniczne',     body_sedan: 'Sedan', body_hatchback: 'Hatchback', body_kombi: 'Kombi', body_suv: 'SUV / Crossover',     body_coupe: 'Coupe', body_cabriolet: 'Cabriolet', body_van: 'Van / Minibus', body_pickup: 'Pickup',     drive_fwd: 'Przedni (FWD)', drive_rwd: 'Tylny (RWD)', drive_awd: '4x4 (AWD)',     origin_krajowy: 'Krajowy', origin_import: 'Import',     dmg_none: 'Bezwypadkowy / brak', dmg_light: 'Lekkie uszkodzenia', dmg_heavy: 'Poważne uszkodzenia',     moto_sport: 'Sportowy', moto_naked: 'Naked', moto_touring: 'Touring', moto_cruiser: 'Cruiser',     moto_enduro: 'Enduro / Cross', moto_scooter: 'Skuter', moto_chopper: 'Chopper', moto_other: 'Inny',     drive_chain: 'Łańcuch', drive_belt: 'Pasek', drive_shaft: 'Wał',     eng_2t: '2-suwowy (2T)', eng_4t: '4-suwowy (4T)', eng_electric: 'Elektryczny',     market_primary: 'Pierwotny', market_secondary: 'Wtórny',     heat_gas: 'Gazowe', heat_district: 'Miejskie', heat_electric: 'Elektryczne', heat_solid: 'Stałopalne', heat_pump: 'Pompa ciepła', heat_other: 'Inne',     cond_ready: 'Do zamieszkania', cond_good: 'Dobry', cond_renovate: 'Do remontu', cond_developer: 'Stan deweloperski', cond_raw: 'Surowy',     furn_yes: 'Tak', furn_partial: 'Częściowo', furn_no: 'Nie',     park_none: 'Brak', park_street: 'Ulica', park_place: 'Miejsce postojowe', park_garage: 'Garaż',     elev_yes: 'Tak', elev_no: 'Nie',     balc_none: 'Brak', balc_balcony: 'Balkon', balc_loggia: 'Loggia', balc_terrace: 'Taras',     yes: 'Tak', no: 'Nie', 
      },
      en: {
        filter_brand:'Make', filter_model:'Model', filter_year_from:'Year from', filter_year_to:'Year to',
        filter_fuel:'Fuel', filter_gearbox:'Transmission', filter_area_from:'Area from', filter_area_to:'Area to', filter_rooms:'Rooms',
        filter_prop_type:'Property type', sort_popular:'Most popular', btn_advanced:'⚙️ Advanced',
        toast_delete_forbidden:'You do not have permission to delete this listing',
        toast_edit_forbidden:'You do not have permission to edit this listing',
        toast_boost_forbidden:'You do not have permission to boost this listing',
        ph_search_generic:'Search...', ph_brand:'Search make...', all_poland:'All Poland', all_brands:'All makes', all_models:'All models',     filter_all: 'All',     spec_energy: 'Energy class',     spec_beach: 'Distance to beach (m)',     spec_beach_max: 'Max. to beach (m)',     spec_rental_yield: 'Rental yield (% / year)',     spec_yield_min: 'Min. yield %',     acc_params: 'Technical parameters',     acc_condition: 'Vehicle condition',     acc_realty: 'Property parameters',     acc_abroad: 'Abroad parameters',     body_sedan: 'Sedan', body_hatchback: 'Hatchback', body_kombi: 'Estate', body_suv: 'SUV / Crossover',     body_coupe: 'Coupe', body_cabriolet: 'Cabriolet', body_van: 'Van / Minibus', body_pickup: 'Pickup',     drive_fwd: 'Front (FWD)', drive_rwd: 'Rear (RWD)', drive_awd: '4x4 (AWD)',     origin_krajowy: 'Domestic', origin_import: 'Import',     dmg_none: 'No damage', dmg_light: 'Light damage', dmg_heavy: 'Heavy damage',     moto_sport: 'Sport', moto_naked: 'Naked', moto_touring: 'Touring', moto_cruiser: 'Cruiser',     moto_enduro: 'Enduro / Cross', moto_scooter: 'Scooter', moto_chopper: 'Chopper', moto_other: 'Other',     drive_chain: 'Chain', drive_belt: 'Belt', drive_shaft: 'Shaft',     eng_2t: '2-stroke (2T)', eng_4t: '4-stroke (4T)', eng_electric: 'Electric',     market_primary: 'Primary', market_secondary: 'Secondary',     heat_gas: 'Gas', heat_district: 'District', heat_electric: 'Electric', heat_solid: 'Solid fuel', heat_pump: 'Heat pump', heat_other: 'Other',     cond_ready: 'Move-in ready', cond_good: 'Good', cond_renovate: 'To renovate', cond_developer: 'Developer finish', cond_raw: 'Shell',     furn_yes: 'Yes', furn_partial: 'Partial', furn_no: 'No',     park_none: 'None', park_street: 'Street', park_place: 'Parking space', park_garage: 'Garage',     elev_yes: 'Yes', elev_no: 'No',     balc_none: 'None', balc_balcony: 'Balcony', balc_loggia: 'Loggia', balc_terrace: 'Terrace',     yes: 'Yes', no: 'No', 
      },
      ru: {
        filter_brand:'Марка', filter_model:'Модель', filter_year_from:'Год от', filter_year_to:'Год до',
        filter_fuel:'Топливо', filter_gearbox:'Коробка',filter_area_from:'Площадь от', filter_area_to:'Площадь до', filter_rooms:'Комнат',
        filter_prop_type:'Тип недвижимости', sort_popular:'Самые популярные', btn_advanced:'⚙️ Расширенные',
        toast_delete_forbidden:'У вас нет прав на удаление этого объявления',
        toast_edit_forbidden:'У вас нет прав на редактирование этого объявления',
        toast_boost_forbidden:'У вас нет прав на поднятие этого объявления',
        ph_search_generic:'Поиск...', ph_brand:'Поиск марки...', all_poland:'Вся Польша', all_brands:'Все марки', all_models:'Все модели',     filter_all: 'Все',     spec_energy: 'Класс энергоэффективности',     spec_beach: 'До пляжа (м)',     spec_beach_max: 'Макс. до пляжа (м)',     spec_rental_yield: 'Доходность аренды (% / год)',     spec_yield_min: 'Мин. доходность %',     acc_params: 'Технические параметры',     acc_condition: 'Состояние',     acc_realty: 'Параметры недвижимости',     acc_abroad: 'Параметры за границей',     body_sedan: 'Седан', body_hatchback: 'Хэтчбек', body_kombi: 'Универсал', body_suv: 'SUV / Кроссовер',     body_coupe: 'Купе', body_cabriolet: 'Кабриолет', body_van: 'Фургон', body_pickup: 'Пикап',     drive_fwd: 'Передний (FWD)', drive_rwd: 'Задний (RWD)', drive_awd: 'Полный (AWD)',     origin_krajowy: 'Местный', origin_import: 'Импорт',     dmg_none: 'Без повреждений', dmg_light: 'Лёгкие повреждения', dmg_heavy: 'Сильные повреждения',     moto_sport: 'Спорт', moto_naked: 'Нейкед', moto_touring: 'Туринг', moto_cruiser: 'Круизер',     moto_enduro: 'Эндуро / Кросс', moto_scooter: 'Скутер', moto_chopper: 'Чоппер', moto_other: 'Другой',     drive_chain: 'Цепь', drive_belt: 'Ремень', drive_shaft: 'Кардан',     eng_2t: '2-тактный (2T)', eng_4t: '4-тактный (4T)', eng_electric: 'Электро',     market_primary: 'Первичный', market_secondary: 'Вторичный',     heat_gas: 'Газ', heat_district: 'Центральное', heat_electric: 'Электрическое', heat_solid: 'Твёрдое топливо', heat_pump: 'Тепловой насос', heat_other: 'Другое',     cond_ready: 'Под ключ', cond_good: 'Хорошее', cond_renovate: 'Под ремонт', cond_developer: 'От застройщика', cond_raw: 'Черновая',     furn_yes: 'Да', furn_partial: 'Частично', furn_no: 'Нет',     park_none: 'Нет', park_street: 'Улица', park_place: 'Место', park_garage: 'Гараж',     elev_yes: 'Да', elev_no: 'Нет',     balc_none: 'Нет', balc_balcony: 'Балкон', balc_loggia: 'Лоджия', balc_terrace: 'Терраса',     yes: 'Да', no: 'Нет', 
      }
    };

    function t(key) {
      return (translations[currentLang] && translations[currentLang][key]) || (EXTRA_I18N[currentLang] && EXTRA_I18N[currentLang][key]) || translations['pl'][key] || (EXTRA_I18N.pl && EXTRA_I18N.pl[key]) || key;
    }

    function applyDynamicI18n() {
      const setText = (selector, key) => { const el=document.querySelector(selector); if(el) el.textContent=t(key); };
      const setPlaceholder = (selector, key) => { const el=document.querySelector(selector); if(el) el.placeholder=t(key); };
      ['auto','moto'].forEach(cat => {
        setText(`#${cat}-brand-label`, 'all_brands');
        setText(`#${cat}-model-label`, 'all_models');
        setPlaceholder(`#${cat}-brand-search`, 'ph_brand');
        setPlaceholder(`#${cat}-loc-search`, 'ph_search_generic');
        setText(`#${cat}-loc-label`, 'all_poland');
      });
      document.querySelectorAll('#filters-auto [data-i18n], #filters-moto [data-i18n], #filters-realty [data-i18n]').forEach(el=>{
        const key=el.getAttribute('data-i18n'); if(key) el.textContent=t(key);
      });
      const popular=document.querySelectorAll('option[data-i18n="sort_popular"]'); popular.forEach(el=>el.textContent=t('sort_popular'));
      const adv=document.querySelectorAll('[data-i18n="btn_advanced"]'); adv.forEach(el=>el.textContent=t('btn_advanced'));
    }

    function setLang(lang) {
      currentLang = lang;
      STORAGE.set('handlio_lang', lang);
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
      });
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
      const activePage = document.querySelector('.page.active');
      if (activePage) {
        const pageId = activePage.id.replace('page-', '');
        if (pageId === 'home') renderHome();
        else if (['auto','moto','realty'].includes(pageId)) renderCategory(pageId);
        else if (pageId === 'my') renderMy();
        else if (pageId === 'fav') renderFav();
        else if (pageId === 'auth') setAuthMode(authMode);
      }
      renderAuthNav();
      applyDynamicI18n();
    }

    // ========== DATA ==========
    const CATEGORIES = {
      auto: { icon: '🚗' },
      moto: { icon: '🏍️' },
      realty: { icon: '🏠' },
 realty_abroad: { icon: '🌍' }
    };

    let ads = [];
    let favorites = [];
    let realtyDeal = 'all';
    let abroadDeal = 'all';
    let galleryAdId = null;
    let galleryIndex = 0;

    const STORAGE = Object.freeze({
      get(key, fallback = null) {
        try { return localStorage.getItem(key); } catch (e) { console.warn('storage get failed', key, e); return fallback; }
      },
      set(key, value) {
        try { localStorage.setItem(key, value); return true; }
        catch (e) { console.warn('storage set failed', key, e); return false; }
      },
      remove(key) {
        try { localStorage.removeItem(key); } catch (e) { console.warn('storage remove failed', key, e); }
      },
      json(key, fallback) {
        const raw = this.get(key, null);
        if (!raw) return fallback;
        try { return JSON.parse(raw); } catch (e) { console.warn('invalid JSON in storage', key, e); return fallback; }
      },
      jsonSet(key, value) { return this.set(key, JSON.stringify(value)); }
    });

    function safeArray(value) { return Array.isArray(value) ? value : []; }
    function normalizeRole(role) {
      return ['private','business','user'].includes(role) ? 'user' : (['superadmin','admin','moderator'].includes(role) ? role : 'user');
    }
    function getCurrentUserId() { return currentUser && typeof currentUser.id === 'string' ? currentUser.id : null; }
    function isOwner(ad) { return !!ad && !!getCurrentUserId() && ad.userId === getCurrentUserId(); }
    function isSuperAdmin() { return !!currentUser && (currentUser.role === 'superadmin' || currentUser.email === SUPER_ADMIN_EMAIL); }
    function isAdminRole() { return !!currentUser && (currentUser.role === 'superadmin' || currentUser.role === 'admin'); }
    function isModeratorRole() { return !!currentUser && (currentUser.role === 'superadmin' || currentUser.role === 'admin' || currentUser.role === 'moderator'); }
    function canManageAd(ad) { return !!currentUser && (isOwner(ad) || isModeratorRole()); }
    function canEditAd(ad) { return !!currentUser && isOwner(ad); }
    function safeImageUrl(src) {
      if (typeof src !== 'string') return '';
      const value = src.trim();
      if (!value) return '';
      if (/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(value)) return value;
      try {
        const u = new URL(value, location.href);
        if (u.protocol === 'https:' || u.protocol === 'http:') return u.href;
      } catch (e) {}
      return '';
    }

    const API_URL = '';

    /** JWT access + refresh */
    let authToken = null;
    let refreshToken = null;
    try {
      authToken = localStorage.getItem('handlio_token') || null;
      refreshToken = localStorage.getItem('handlio_refresh') || null;
    } catch (e) { authToken = null; refreshToken = null; }

    function setAuthToken(token, refresh) {
      authToken = token || null;
      if (refresh !== undefined) refreshToken = refresh || null;
      try {
        if (token) localStorage.setItem('handlio_token', token);
        else localStorage.removeItem('handlio_token');
        if (refresh !== undefined) {
          if (refresh) localStorage.setItem('handlio_refresh', refresh);
          else localStorage.removeItem('handlio_refresh');
        }
      } catch (e) {}
    }

    function authHeaders(extra) {
      const h = Object.assign({ 'Content-Type': 'application/json' }, extra || {});
      if (authToken) h['Authorization'] = 'Bearer ' + authToken;
      return h;
    }

    let refreshInFlight = null;
    async function refreshAccessToken() {
      if (!refreshToken) return false;
      if (refreshInFlight) return refreshInFlight;
      refreshInFlight = (async () => {
        try {
          const res = await fetch(API_URL + '/api/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken })
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
        setAuthToken(null, null);

                try { currentUser = null; } catch (e) {}
        try { STORAGE.remove('handlio_user'); } catch (e) {}
        try { favorites = []; } catch (e) {}
        try { if (typeof renderAuthNav === 'function') renderAuthNav(); } catch (e) {}
        try { if (typeof stopModerationPolling === 'function') stopModerationPolling(); } catch (e) {}

        return false;
      }
          setAuthToken(data.token || data.accessToken, data.refreshToken || refreshToken);
          return true;
        } catch (e) {
          return false;
        } finally {
          refreshInFlight = null;
        }
      })();
      return refreshInFlight;
    }

    const API = {
      async request(path, options) {
        const opts = options || {};
        const doFetch = () => fetch(API_URL + path, Object.assign({}, opts, {
          headers: opts.headers || authHeaders()
        }));
        let res = await doFetch();
        if (res.status === 401 && refreshToken && path !== '/api/auth/refresh' && path !== '/api/auth/login') {
          const ok = await refreshAccessToken();
          if (ok) res = await doFetch();
        }
        let data = null;
        const text = await res.text();
        try { data = text ? JSON.parse(text) : null; } catch (e) { data = { raw: text }; }
        if (!res.ok) {
          const err = new Error((data && data.error) || ('HTTP ' + res.status));
          err.status = res.status;
          err.data = data;
          throw err;
        }
        return data;
      },
      getAds() { return this.request('/api/ads', { method: 'GET' }); },
      createAd(body) { return this.request('/api/ads', { method: 'POST', body: JSON.stringify(body) }); },
      updateAd(id, body) {
        return this.request('/api/ads/' + encodeURIComponent(id), {
          method: 'PUT',
          body: JSON.stringify(body)
        });
      },
      deleteAd(id) {
        return this.request('/api/ads/' + encodeURIComponent(id), { method: 'DELETE' });
      },
      payDemo(body) {
        return this.request('/api/payments/demo', { method: 'POST', body: JSON.stringify(body) });
      },
      login(email, password) {
        return this.request('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
      },
      register(payload) {
        return this.request('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      },
      me() { return this.request('/api/auth/me'); },
      deleteAccount: async () => {
        return this.request('/api/auth/me', { method: 'DELETE' });
      },
      viewAd(id) {
  return this.request('/api/ads/' + encodeURIComponent(id) + '/view', {
    method: 'POST',
    body: '{}'
  });
},
      changePassword(currentPassword, newPassword) {
        return this.request('/api/auth/change-password', {
          method: 'POST',
          body: JSON.stringify({ currentPassword, newPassword })
        });
      },
      forgotPassword(email) {
        return this.request('/api/auth/forgot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
      },
      resetPassword(email, code, newPassword) {
          return this.request('/api/auth/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, code, newPassword })
          });
        },

        // ========== H23 — messages / notifications / reports / users ==========
        getMessages() {
          return this.request('/api/messages', { method: 'GET' });
        },
        sendMessage(body) {
          return this.request('/api/messages', { method: 'POST', body: JSON.stringify(body) });
        },
        markMessagesRead(conv) {
          return this.request('/api/messages/read', { method: 'POST', body: JSON.stringify({ conv }) });
        },

        getNotifications() {
          return this.request('/api/notifications', { method: 'GET' });
        },
        markNotificationRead(id) {
          return this.request('/api/notifications/' + encodeURIComponent(id) + '/read', { method: 'POST', body: '{}' });
        },
        markAllNotificationsRead() {
          return this.request('/api/notifications/read-all', { method: 'POST', body: '{}' });
        },

        createReport(body) {
          return this.request('/api/reports', { method: 'POST', body: JSON.stringify(body) });
        },
        getReports() {
          return this.request('/api/reports', { method: 'GET' });
        },
        closeReport(id) {
          return this.request('/api/reports/' + encodeURIComponent(id) + '/close', { method: 'POST', body: '{}' });
        },

        getUsersPublic(ids) {
          const q = Array.isArray(ids) ? ids.join(',') : String(ids || '');
          return this.request('/api/users/public?ids=' + encodeURIComponent(q), { method: 'GET' });
        }
      };

    
    function syncLocalUsers() {
      try {
        if (typeof H23 === 'undefined' || !H23.get) return;
        const users = H23.get('handlio_users', []);
        const byId = new Map(users.map(u => [String(u.id), u]));
        if (currentUser) {
          byId.set(String(currentUser.id), {
            id: currentUser.id,
            name: currentUser.name || null,
            company: currentUser.company || null,
            email: currentUser.email || null,
            type: currentUser.type || 'private'
          });
        }
        // sellers from ads (id only — name fills on chat if known)
        if (Array.isArray(ads)) {
          ads.forEach(a => {
            if (!a || a.userId == null) return;
            const id = String(a.userId);
            if (!byId.has(id)) {
              byId.set(id, { id: a.userId, name: null, company: null, email: null, type: 'private' });
            }
          });
        }
        H23.put('handlio_users', [...byId.values()]);
      } catch (e) { /* ignore */ }
    }

async function loadAds() {
      try {
        const data = await API.getAds();
        ads = safeArray(data)
          .filter(a => a && typeof a.id === 'string' && ['auto','moto','realty','realty_abroad'].includes(a.category))
          .map(a => ({ ...a, status: ['approved','pending','rejected'].includes(a.status) ? a.status : 'approved' }));
              } catch (e) {
        console.error('loadAds error:', e);
        ads = [];
      }
      try {
        const uid = typeof getCurrentUserId === 'function' ? getCurrentUserId() : null;
        favorites = uid ? safeArray(STORAGE.json('handlio_favs_' + uid, [])) : safeArray(STORAGE.json('handlio_favs_guest', []));
      } catch (e) {
        favorites = [];
      }
    }

    // Сервер сам сохраняет данные — клиентский saveAds не пишет ads
    function saveAds() {
      // no-op: сервер сохраняет автоматически
      return true;
    }

    function saveFavs() {
      const uid = getCurrentUserId() || 'guest';
      STORAGE.jsonSet('handlio_favs_' + uid, safeArray(favorites));
    }

    function isFav(id) {
      return favorites.includes(id);
    }

    function toggleFav(id, ev) {
      if (ev) ev.stopPropagation();
      if (isFav(id)) favorites = favorites.filter(x => x !== id);
      else favorites.push(id);
      saveFavs();
      const active = document.querySelector('.page.active');
      if (active) {
        const pid = active.id.replace('page-', '');
        if (pid === 'home') renderHome();
        else if (['auto','moto','realty','abroad'].includes(pid)) renderCategory(pid);
        else if (pid === 'my') renderMy();
        else if (pid === 'fav') renderFav();
      }
      showToast(isFav(id) ? t('toast_fav_add') : t('toast_fav_remove'));
    }

    function generateId() {
      if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

        function seedIfEmpty() {
      // no-op: dane ładują się z serwera (loadAds → GET /api/ads)
      // Эта функция оставлена для обратной совместимости.
      return;
    }

    function showPage(page) {
      if (page === 'add' && !currentUser) {
        goAdd();
        return;
      }
      // Keep page transitions deterministic: stale overlays and gallery state must not survive navigation.
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      if (page !== 'add' && window.editingAdId) {
        window.editingAdId = null;
        pendingPhotos = [];
      }
      galleryAdId = null;
      galleryIndex = 0;
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      const pageEl = document.getElementById('page-' + page);
      if (!pageEl) return;
      pageEl.classList.add('active');
      document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.page === page);
      });

      if (page === 'home') renderHome();
      else if (page === 'auto') renderCategory('auto');
      else if (page === 'moto') renderCategory('moto');
      else if (page === 'realty') renderCategory('realty');
      else if (page === 'abroad') renderCategory('abroad');
      else if (page === 'my') renderMy();
      else if (page === 'fav') renderFav();
      else if (page === 'messages') {

  if (!window.__h23OpeningChat) h23RenderMessages();
}
      else if (page === 'notifications') h23RenderNotifications();
      else if (page === 'seller') h23RenderSeller();
      else if (page === 'reports') h23RenderReports();
      else if (page === 'admin') renderAdmin();
      else if (page === 'auth') setAuthMode(authMode);
    }

    function formatPrice(n) {
      return new Intl.NumberFormat('pl-PL').format(n) + ' zł';
    }

    function formatDate(ts) {
      const d = new Date(Number(ts));
      const now = new Date();
      const diff = (now - d) / 1000;
      if (diff < 0 || diff < 60) return currentLang === 'ru' ? 'только что' : currentLang === 'en' ? 'just now' : 'przed chwilą';
      if (diff < 3600) return Math.floor(diff / 60) + ' ' + t('min_ago');
      if (diff < 86400) return Math.floor(diff / 3600) + ' ' + t('h_ago');
      if (diff < 86400 * 2) return t('yesterday');
      return d.toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : currentLang === 'ru' ? 'ru-RU' : 'en-GB');
    }

    function shortSpecs(ad) {
      const bits = [];
      if (ad.year) bits.push(escapeHtml(ad.year));
      if (ad.mileage) bits.push(escapeHtml(Number(ad.mileage).toLocaleString('pl-PL') + ' km'));
      if (ad.power) bits.push(escapeHtml(ad.power + ' KM'));
      if (ad.engineCapacity) bits.push(escapeHtml(ad.engineCapacity + ' cm³'));
      if (ad.bodyType) bits.push(escapeHtml(ad.bodyType));
      if (ad.motoType) bits.push(escapeHtml(ad.motoType));
      if (ad.area) bits.push(escapeHtml(ad.area + ' m²'));
      if (ad.rooms) bits.push(escapeHtml(ad.rooms + (currentLang === 'ru' ? ' комн.' : currentLang === 'en' ? ' rooms' : ' pok.')));
      if (ad.floor) bits.push(escapeHtml(ad.floor + (currentLang === 'ru' ? ' этаж' : currentLang === 'en' ? ' floor' : ' piętro')));
      if (ad.buildYear) bits.push(escapeHtml(ad.buildYear));
      if (ad.engine) bits.push(escapeHtml(ad.engine + ' cm³'));
      if (ad.color) {
        const colors = { black:'Czarny', white:'Biały', silver:'Srebrny', gray:'Szary', blue:'Niebieski', red:'Czerwony', green:'Zielony', brown:'Brązowy', beige:'Beżowy', yellow:'Żółty', orange:'Pomarańczowy', other:'Inny' };
        bits.push(escapeHtml(colors[ad.color] || ad.color));
      }
      return bits.slice(0, 5);
    }

    function adCardHTML(ad) {
      const catName = t('cat_name_' + ad.category);
      const icon = CATEGORIES[ad.category].icon;
      const imgs = getAdImages(ad);
      const hasImg = imgs.length > 0;
      const imgInner = hasImg
        ? `<img src="${escapeHtml(imgs[0])}" alt="">`
        : `${icon}`;
      const specs = shortSpecs(ad);
      const fav = isFav(ad.id);
      const boosted = ad.boostedUntil && ad.boostedUntil > Date.now();
      const overlay = !hasImg ? `<div class="ad-image-overlay"><span>📍 ${escapeHtml(ad.country && ad.country !== "Polska"
  ? (ad.city ? ad.city + ", " : "") + ad.country
  : ad.city)}</span>
          <span>${formatDate(ad.created)}</span></div>` : '';
      return `
        <div class="ad-card" data-action="open-ad" data-id="${escapeAttr(ad.id)}">
          <button class="fav-btn ${fav ? 'active' : ''}" data-action="fav" data-id="${escapeAttr(ad.id)}" title="Favorite">${fav ? '♥' : '♡'}</button>
          <div class="ad-image cat-${ad.category}">${imgInner}${overlay}</div>
          <div class="ad-body">
            <span class="ad-category">${catName}${boosted ? '<span class="boost-badge">TOP</span>' : ''}</span>
            <div class="ad-price">${formatPrice(ad.price)}</div>
            <div class="ad-title">${escapeHtml(ad.title)}</div>
            ${specs.length ? `<div class="ad-specs">${specs.map(s => `<span class="chip">${s}</span>`).join('')}</div>` : ''}
            <div class="ad-meta">
              <span class="ad-meta-city">📍 ${escapeHtml(ad.country && ad.country !== "Polska"
  ? (ad.city ? ad.city + ", " : "") + ad.country
  : ad.city)}</span>
              <span>👁 ${ad.views || 0}</span>
              <span>${formatDate(ad.created)}</span>
            </div>
          </div>
        </div>
      `;
    }

    function escapeHtml(str) {
      return String(str == null ? '' : str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
    /** Для атрибутов / JS-строк в onclick */
    function escapeAttr(str) {
      return escapeHtml(str).replace(/`/g, '&#96;');
    }

    function renderHome() {
      const approved = ads.filter(a => (a.status || 'approved') === 'approved');
      const counts = {
        auto: approved.filter(a => a.category === 'auto').length,
        moto: approved.filter(a => a.category === 'moto').length,
        realty: approved.filter(a => typeof isPolandRealty === 'function' ? isPolandRealty(a) : a.category === 'realty').length,
        abroad: approved.filter(a => typeof isAbroadRealty === 'function' ? isAbroadRealty(a) : false).length
      };
      document.getElementById('stats').innerHTML = `
  <div class="stat-card" style="cursor:pointer" data-action="nav" data-page="auto">
          <div class="stat-number">${counts.auto}</div>
          <div class="stat-label">${t('stat_auto')}</div>
        </div>
        <div class="stat-card" style="cursor:pointer" data-action="nav" data-page="moto">
          <div class="stat-number">${counts.moto}</div>
          <div class="stat-label">${t('stat_moto')}</div>
        </div>
        <div class="stat-card" style="cursor:pointer" data-action="nav" data-page="realty">
          <div class="stat-number">${counts.realty}</div>
          <div class="stat-label">${t('stat_realty')}</div>
        </div>
        <div class="stat-card" style="cursor:pointer" data-action="nav" data-page="abroad">
          <div class="stat-number">${counts.abroad}</div>
          <div class="stat-label">${t('stat_abroad') || 'Nieruchomości zagraniczne'}</div>
        </div>
      `;

      const recent = [...ads].filter(a => (a.status || 'approved') === 'approved').sort((a, b) => b.created - a.created).slice(0, 6);
      const grid = document.getElementById('home-ads');
      if (recent.length === 0) {
        grid.innerHTML = `<div class="empty"><div class="empty-icon">📭</div><p>${t('empty_none')}</p></div>`;
      } else {
        grid.innerHTML = recent.map(adCardHTML).join('');
      }
    }

    function setRealtyDeal(deal) {
      realtyDeal = deal;
      document.querySelectorAll('#realty-tabs .deal-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.deal === deal);
      });
      renderCategory('realty');
    }


    function toggleRoomChip(btn) {
      btn.classList.toggle('active');
      const cat = btn.closest('.room-chips')?.dataset?.cat;
      if (cat && typeof renderCategory === 'function') renderCategory(cat);
    }

    function getSelectedRooms(prefix) {
      const box = document.getElementById(prefix + '-rooms');
      if (!box) return [];
      return [...box.querySelectorAll('.room-chip.active')].map(b => parseInt(b.dataset.rooms, 10)).filter(n => !isNaN(n));
    }

    function adMatchesRooms(ad, selected) {
      if (!selected || !selected.length) return true;
      const r = parseInt(ad.rooms, 10) || 0;
      return selected.some(n => (n >= 4 ? r >= 4 : r === n));
    }

    function setAbroadDeal(deal) {
      abroadDeal = deal;
      document.querySelectorAll('#abroad-tabs .deal-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.deal === deal);
      });
      renderCategory('abroad');
    }

    function isAbroadRealty(a) {
  if (!a) return false;
  if (a.category !== 'realty' && a.category !== 'realty_abroad') return false;
  if (a.category === 'realty_abroad') return true;
  if (a.locationType === 'abroad') return true;
  if (a.country && a.country !== 'Polska' && a.country !== 'Poland') return true;
  return false;
}

function isPolandRealty(a) {
  if (!a) return false;
  if (a.category !== 'realty' && a.category !== 'realty_abroad') return false;
  return !isAbroadRealty(a);
}

    function getFiltered(category) {
      let list;
      if (category === 'abroad') {
        list = ads.filter(a => isAbroadRealty(a) && (a.status || 'approved') === 'approved');
      } else if (category === 'realty' || category === 'realty_abroad') {
        list = ads.filter(a => isPolandRealty(a) && (a.status || 'approved') === 'approved');
      } else {
        list = ads.filter(a => a.category === category && (a.status || 'approved') === 'approved');
      }
      // Location: województwo / miasto (PL sections only)
      if (category !== 'abroad' && typeof matchesLocation === 'function') {
        list = list.filter(a => matchesLocation(a, category));
      }
      const search = (document.getElementById(category + '-search')?.value || '').toLowerCase().trim();
      const min = parseFloat(document.getElementById(category + '-min')?.value) || 0;
      const max = parseFloat(document.getElementById(category + '-max')?.value) || Infinity;
      const sort = document.getElementById(category + '-sort')?.value || 'new';

      // Brand / model (vehicles only)
      if (category === 'auto' || category === 'moto') {
        const selectedBrand = getSelectedBrand(category);
        if (selectedBrand && selectedBrand !== 'Wszystkie') {
          list = list.filter(a => a.brand === selectedBrand);
        }
        const selectedModels = getSelectedModels(category);
        if (selectedModels && selectedModels.size > 0) {
          list = list.filter(a => selectedModels.has(a.model));
        }
      }

      // Advanced filters
      const yearFrom = parseInt(document.getElementById(category + '-year-from')?.value) || 0;
      const yearTo = parseInt(document.getElementById(category + '-year-to')?.value) || 9999;

      if (category === 'realty' && realtyDeal !== 'all') {
        list = list.filter(a => (a.deal || 'sale') === realtyDeal);
      }

      if (search) {
        const words = search.split(/\s+/).filter(w => w.length > 1);
        list = list.filter(a => {
          const haystack = (a.title + ' ' + a.city + ' ' + (a.country || '') + ' ' + (a.district || '') + ' ' + a.desc + ' ' + (a.year || '') + ' ' + (a.fuel || '') + ' ' + (a.brand || '') + ' ' + (a.model || '')).toLowerCase();
          return words.every(w => haystack.includes(w));
        });
      }
      
      list = list.filter(a => a.price >= min && a.price <= max);
      
      if (category === 'auto' || category === 'moto') {
        if (yearFrom) list = list.filter(a => (a.year || 0) >= yearFrom);
        if (yearTo < 9999) list = list.filter(a => (a.year || 0) <= yearTo);
      }
      
      // Category specific advanced filters
      if (category === 'auto') {
        const fuel = document.getElementById('auto-fuel')?.value || '';
        const gearbox = document.getElementById('auto-gearbox')?.value || '';
        if (fuel) list = list.filter(a => a.fuel === fuel);
        if (gearbox) list = list.filter(a => a.gearbox === gearbox);
        const bodyT = document.getElementById('flt-body-type')?.value || '';
        const driveT = document.getElementById('flt-drive-type')?.value || '';
        const pMin = parseInt(document.getElementById('flt-power-min')?.value) || 0;
        const pMax = parseInt(document.getElementById('flt-power-max')?.value) || 0;
        const eMin = parseInt(document.getElementById('flt-eng-min')?.value) || 0;
        const eMax = parseInt(document.getElementById('flt-eng-max')?.value) || 0;
        if (bodyT) list = list.filter(a => a.bodyType === bodyT);
        if (driveT) list = list.filter(a => a.driveType === driveT);
        if (pMin) list = list.filter(a => Number(a.power) >= pMin);
        if (pMax) list = list.filter(a => Number(a.power) <= pMax);
        if (eMin) list = list.filter(a => Number(a.engineCapacity) >= eMin);
        if (eMax) list = list.filter(a => Number(a.engineCapacity) <= eMax);
      } else if (category === 'moto') {
        const ccFrom = parseInt(document.getElementById('moto-cc-from')?.value) || 0;
        const ccTo = parseInt(document.getElementById('moto-cc-to')?.value) || 9999;
        if (ccFrom) list = list.filter(a => (a.engine || 0) >= ccFrom);
        if (ccTo < 9999) list = list.filter(a => (a.engine || 0) <= ccTo);
        const mt = document.getElementById('flt-moto-type')?.value || '';
        const md = document.getElementById('flt-moto-drive')?.value || '';
        const mpMin = parseInt(document.getElementById('flt-moto-power-min')?.value) || 0;
        const mpMax = parseInt(document.getElementById('flt-moto-power-max')?.value) || 0;
        if (mt) list = list.filter(a => a.motoType === mt);
        if (md) list = list.filter(a => a.driveType === md);
        if (mpMin) list = list.filter(a => Number(a.power) >= mpMin);
        if (mpMax) list = list.filter(a => Number(a.power) <= mpMax);
      } else if (category === 'realty' || category === 'abroad') {
        const prefix = category === 'abroad' ? 'abroad' : 'realty';
        const areaFrom = parseFloat(document.getElementById(prefix + '-area-from')?.value) || 0;
        const areaTo = parseFloat(document.getElementById(prefix + '-area-to')?.value) || Infinity;
        const selectedRooms = getSelectedRooms(prefix);
        const type = document.getElementById(prefix + '-type')?.value || '';
        const cityF = document.getElementById(prefix + '-city')?.value || '';
        const countryF = document.getElementById(prefix + '-country')?.value || '';
        if (cityF) list = list.filter(a => (a.city || '') === cityF || (a.city || '').includes(cityF));
        if (countryF) list = list.filter(a => (a.country || '') === countryF);
        if (areaFrom) list = list.filter(a => (a.area || 0) >= areaFrom);
        if (areaTo < Infinity) list = list.filter(a => (a.area || 0) <= areaTo);
        if (selectedRooms.length) {
          list = list.filter(a => adMatchesRooms(a, selectedRooms));
        }
        if (type) list = list.filter(a => a.propType === type);
        if (category === 'realty' || prefix === 'realty') {
          const bf = parseInt(document.getElementById('flt-build-from')?.value) || 0;
          const bt = parseInt(document.getElementById('flt-build-to')?.value) || 0;
          const market = document.getElementById('flt-market')?.value || '';
          const heat = document.getElementById('flt-heating')?.value || '';
          const ct = document.getElementById('flt-cond-type')?.value || '';
          const furn = document.getElementById('flt-furnished')?.value || '';
          const park = document.getElementById('flt-parking')?.value || '';
          const elev = document.getElementById('flt-elevator')?.value || '';
          if (bf) list = list.filter(a => Number(a.buildYear) >= bf);
          if (bt) list = list.filter(a => Number(a.buildYear) <= bt);
          if (market) list = list.filter(a => a.marketType === market);
          if (heat) list = list.filter(a => a.heating === heat);
          if (ct) list = list.filter(a => a.conditionType === ct);
          if (furn) list = list.filter(a => a.furnished === furn);
          if (park) list = list.filter(a => a.parking === park);
          if (elev) list = list.filter(a => a.elevator === elev);
        }
        // deal filter for abroad
        if (category === 'abroad' && typeof abroadDeal !== 'undefined' && abroadDeal !== 'all') {
          list = list.filter(a => (a.deal || 'sale') === abroadDeal);
        }
        if (category === 'abroad') {
          const energy = document.getElementById('flt-energy')?.value || '';
          const beachMax = parseInt(document.getElementById('flt-beach-max')?.value) || 0;
          const yieldMin = parseFloat(document.getElementById('flt-yield-min')?.value) || 0;
          if (energy) list = list.filter(a => a.energyClass === energy);
          if (beachMax) list = list.filter(a => a.beachDistance != null && Number(a.beachDistance) <= beachMax);
          if (yieldMin) list = list.filter(a => a.rentalYield != null && Number(a.rentalYield) >= yieldMin);
        }
      }

      const boostScore = (a) => (a.boostedUntil && a.boostedUntil > Date.now()) ? 1 : 0;
      
      if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
      else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
      else if (sort === 'popular') list.sort((a, b) => (b.views || 0) - (a.views || 0));
      else list.sort((a, b) => boostScore(b) - boostScore(a) || b.created - a.created);

      return list;
    }

    const debouncedRenderTimers = {};
    function debouncedSearch(cat) {
      clearTimeout(debouncedRenderTimers[cat]);
      debouncedRenderTimers[cat] = setTimeout(() => {
        if (typeof renderCategory === 'function') renderCategory(cat);
      }, 250);
    }
    window.debouncedSearch = debouncedSearch;

    const PAGE_SIZE = 12;
    const pageShown = { auto: PAGE_SIZE, moto: PAGE_SIZE, realty: PAGE_SIZE, abroad: PAGE_SIZE };

    function resetCategoryPage(category) {
      pageShown[category] = PAGE_SIZE;
    }

    function renderCategory(category, append) {
      if (!append) pageShown[category] = PAGE_SIZE;
      const list = getFiltered(category);
      const grid = document.getElementById(category + '-ads');
      if (!grid) return;
      if (list.length === 0) {
        grid.innerHTML = `<div class="empty"><div class="empty-icon">🔍</div><p>${t('empty_search')}</p></div>`;
        return;
      }
      const limit = pageShown[category] || PAGE_SIZE;
      const slice = list.slice(0, limit);
      let html = slice.map(adCardHTML).join('');
      if (list.length > limit) {
        html += `<div class="load-more-wrap"><button type="button" class="btn btn-outline" data-action="load-more" data-cat="${category}">${t('btn_load_more') || 'Pokaż więcej'} (${list.length - limit})</button></div>`;
      }
      grid.innerHTML = html;
    }

    function loadMoreAds(category) {
      pageShown[category] = (pageShown[category] || PAGE_SIZE) + PAGE_SIZE;
      renderCategory(category, true);
    }
    window.loadMoreAds = loadMoreAds;


    function renderFav() {
      const list = ads.filter(a => isFav(a.id) && (a.status || 'approved') === 'approved').sort((a, b) => b.created - a.created);
      const grid = document.getElementById('fav-ads');
      if (!grid) return;
      if (list.length === 0) {
        grid.innerHTML = `<div class="empty"><div class="empty-icon">♡</div><p>${t('empty_fav')}</p></div>`;
      } else {
        grid.innerHTML = list.map(adCardHTML).join('');
      }
    }

    function renderMy() {
      let mine = [];
      if (currentUser) {
        mine = ads.filter(a => a.userId === currentUser.id).sort((a, b) => b.created - a.created);
      }
      const grid = document.getElementById('my-ads');
      if (mine.length === 0) {
        grid.innerHTML = `<div class="empty"><div class="empty-icon">📝</div><p>${t('empty_my')}</p><br><button class="btn btn-primary" data-action="go-add">${t('empty_my_btn')}</button></div>`;
      } else {
        grid.innerHTML = mine.map(adCardHTML).join('');
      }
    }

    function getSpecLabel(key, value) {
      if (!value) return null;
      const map = {
        fuel_benzyna: t('fuel_petrol'), fuel_diesel: t('fuel_diesel'), fuel_lpg: t('fuel_lpg'),
        fuel_hybrid: t('fuel_hybrid'), fuel_electric: t('fuel_electric'),
        gear_manual: t('gear_manual'), gear_auto: t('gear_auto'),
        cond_new: t('cond_new'), cond_used: t('cond_used'), cond_damaged: t('cond_damaged'),
        deal_sale: t('deal_sale'), deal_rent: t('deal_rent'),
        prop_apartment: t('prop_apartment'), prop_house: t('prop_house'),
        prop_plot: t('prop_plot'), prop_commercial: t('prop_commercial')
      };
      if (key === 'fuel') return map['fuel_' + value] || value;
      if (key === 'gearbox') return map['gear_' + value] || value;
      if (key === 'condition') return map['cond_' + value] || value;
      if (key === 'deal') return map['deal_' + value] || value;
      if (key === 'propType') return map['prop_' + value] || value;
      return value;
    }


function buildSpecsHTML(ad) {
  const parts = [];
  const chip = (emoji, text) => emoji + ' ' + escapeHtml(text == null ? '' : text);
  const bodyLabels = {
    sedan: t('body_sedan') || 'Sedan',
    hatchback: t('body_hatchback') || 'Hatchback',
    kombi: t('body_kombi') || 'Kombi',
    suv: t('body_suv') || 'SUV / Crossover',
    coupe: t('body_coupe') || 'Coupe',
    cabriolet: t('body_cabriolet') || 'Cabriolet',
    van: t('body_van') || 'Van / Minibus',
    pickup: t('body_pickup') || 'Pickup'
  };
  const driveLabels = {
    fwd: t('drive_fwd') || 'Przedni (FWD)',
    rwd: t('drive_rwd') || 'Tylny (RWD)',
    awd: t('drive_awd') || '4x4 (AWD)',
    chain: t('drive_chain') || 'Łańcuch',
    belt: t('drive_belt') || 'Pasek',
    shaft: t('drive_shaft') || 'Wał'
  };
  const damagedLabels = {
    none: t('dmg_none') || 'Bezwypadkowy / brak',
    light: t('dmg_light') || 'Lekkie uszkodzenia',
    heavy: t('dmg_heavy') || 'Poważne uszkodzenia'
  };
  const originLabels = {
    krajowy: t('origin_krajowy') || 'Krajowy',
    import: t('origin_import') || 'Import'
  };
  if (ad.category === 'auto' || ad.category === 'moto') {
    if (ad.year) parts.push(chip('📅', ad.year));
    if (ad.mileage) parts.push(chip('🛣️', Number(ad.mileage).toLocaleString('pl-PL') + ' km'));
  }

  if (ad.category === 'auto') {
    if (ad.fuel) parts.push(chip('⛽', getSpecLabel('fuel', ad.fuel)));
    if (ad.gearbox) parts.push(chip('🕹️', getSpecLabel('gearbox', ad.gearbox)));
    if (ad.color) {
      const colors = {
        black: 'Czarny', white: 'Biały', silver: 'Srebrny', gray: 'Szary',
        blue: 'Niebieski', red: 'Czerwony', green: 'Zielony', brown: 'Brązowy',
        beige: 'Beżowy', yellow: 'Żółty', orange: 'Pomarańczowy', other: 'Inny'
      };
      parts.push(chip('🎨', colors[ad.color] || ad.color));
    }
    if (ad.brand) parts.push(chip('🚘', ad.brand));
    if (ad.model) parts.push(chip('🏷️', ad.model));
  }

  if (ad.category === 'moto') {
    if (ad.brand) parts.push(chip('🏍️', ad.brand));
    if (ad.model) parts.push(chip('🏷️', ad.model));
    if (ad.engine) parts.push(chip('🔩', ad.engine + ' cm³'));
  }

  if (ad.condition) parts.push(chip('✓', getSpecLabel('condition', ad.condition)));

  if (ad.category === 'realty' || ad.category === 'realty_abroad') {
    if (ad.area) parts.push(chip('📐', ad.area + ' m²'));
    if (ad.rooms) parts.push(chip('🚪', ad.rooms));
    if (ad.floor) parts.push(chip('🪜', ad.floor));
    if (ad.deal) {
      const dealIcon = ad.deal === 'rent' ? '🔑' : '💰';
      parts.push(chip(dealIcon, getSpecLabel('deal', ad.deal)));
    }
    if (ad.propType) {
      const propIcons = { house: '🏡', apartment: '🏢', plot: '🌳', commercial: '🏬' };
      const icon = propIcons[ad.propType] || '🏠';
      parts.push(chip(icon, getSpecLabel('propType', ad.propType)));
    }
  }

  if (ad.power) parts.push(chip('⚡', ad.power + ' KM'));
  if (ad.engineCapacity) parts.push(chip('🔩', ad.engineCapacity + ' cm³'));
if (ad.bodyType) parts.push(chip('🚗', bodyLabels[ad.bodyType] || ad.bodyType));
if (ad.driveType) parts.push(chip('⚙️', driveLabels[ad.driveType] || ad.driveType));
  if (ad.doors) parts.push(chip('🚪', ad.doors + ' drz.'));
if (ad.polishOrigin) parts.push(chip('🌍', originLabels[ad.polishOrigin] || ad.polishOrigin));
if (ad.damaged) parts.push(chip('🔧', damagedLabels[ad.damaged] || ad.damaged));
  if (ad.motoType) parts.push(chip('🏍️', ad.motoType));
  if (ad.engineType) parts.push(chip('🔋', ad.engineType));
  if (ad.licenseCategory) parts.push(chip('🪪', ad.licenseCategory));
  if (ad.buildYear) parts.push(chip('🏗️', ad.buildYear));
  if (ad.marketType) parts.push(chip('📊', ad.marketType));
  if (ad.heating) parts.push(chip('🔥', ad.heating));
  if (ad.conditionType) parts.push(chip('🏠', ad.conditionType));
  if (ad.furnished) parts.push(chip('🛋️', ad.furnished));
  if (ad.parking) parts.push(chip('🅿️', ad.parking));
  if (ad.elevator) parts.push(chip('🛗', ad.elevator));
  if (ad.balcony) parts.push(chip('🌤️', ad.balcony));
  if (parts.length === 0) return '';
  return '<div class="modal-specs">' + parts.map(p => '<span class="spec-chip">' + p + '</span>').join('') + '</div>';
}

    function openAd(id) {
const ad = ads.find(a => a.id === id);
if (!ad) return;
try {
        const viewedKey = 'handlio_viewed_' + id;
        if (!sessionStorage.getItem(viewedKey)) {
          sessionStorage.setItem(viewedKey, '1');
          
          if (typeof API !== 'undefined' && API.viewAd) {
            API.viewAd(id).then(function(data) {
              if (data && data.views != null) {
                ad.views = data.views;

                const viewsBadge = document.querySelector('.views-badge');
                if (viewsBadge) viewsBadge.textContent = '👁 ' + data.views;


                const card = document.querySelector(`.ad-card[data-id="${id}"]`);
                if (card) {
                  const metaSpans = card.querySelectorAll('.ad-meta span');
                  
                  if (metaSpans[1]) metaSpans[1].textContent = '👁 ' + data.views;
                }
              }
            }).catch(function() {});
          } else {
            ad.views = (ad.views || 0) + 1;
          }
        }
      } catch (e) {}
      galleryAdId = id;
      galleryIndex = 0;
      
      const catName = t('cat_name_' + ad.category);
      const icon = CATEGORIES[ad.category].icon;

      const imgEl = document.getElementById('modal-image');
      const images = getAdImages(ad);
      imgEl.className = 'modal-image cat-' + ad.category;
      if (images.length) {
        imgEl.innerHTML = `<img src="${escapeHtml(images[0])}" alt="" id="modal-main-img">`;
        let gallery = document.getElementById('modal-gallery');
        if (!gallery) {
          gallery = document.createElement('div');
          gallery.id = 'modal-gallery';
          gallery.className = 'modal-gallery';
          imgEl.parentElement.insertBefore(gallery, imgEl.nextSibling);
        }
        if (images.length > 1) {
          gallery.style.display = 'flex';
          gallery.innerHTML = images.map((src, i) =>
            `<img src="${escapeHtml(src)}" class="${i===0?'active':''}" data-action="modal-photo" data-id="${escapeHtml(ad.id)}" data-idx="${i}" alt="">`
          ).join('');
          imgEl.classList.add('gallery-stage');
          if (!imgEl.querySelector('.gallery-nav.prev')) {
            imgEl.insertAdjacentHTML('beforeend', '<button class="gallery-nav prev" data-action="gallery-prev">‹</button><button class="gallery-nav next" data-action="gallery-next">›</button>');
          }
          if (!imgEl.querySelector('.swipe-hint')) {
            imgEl.insertAdjacentHTML('afterend', '<div class="swipe-hint">← → przesuń dla przeglądania zdjęć</div>');
          }
          let sx = 0;
          imgEl.ontouchstart = e => { sx = e.changedTouches[0].screenX; };
          imgEl.ontouchend = e => {
            const dx = e.changedTouches[0].screenX - sx;
            if (Math.abs(dx) > 40) (dx < 0 ? galleryNext : galleryPrev)();
          };
        } else {
          gallery.style.display = 'none';
          gallery.innerHTML = '';
          imgEl.classList.remove('gallery-stage');
          imgEl.ontouchstart = null;
          imgEl.ontouchend = null;
        }
      } else {
        imgEl.innerHTML = icon;
        const gallery = document.getElementById('modal-gallery');
        if (gallery) { gallery.style.display = 'none'; gallery.innerHTML = ''; }
        imgEl.classList.remove('gallery-stage');
      }

      document.getElementById('modal-price').textContent = formatPrice(ad.price);
      document.getElementById('modal-title').textContent = ad.title;
      document.getElementById('modal-meta').innerHTML = `
        <span>${icon} ${catName}</span>
        <span>📍 ${escapeHtml(ad.country && ad.country !== "Polska" ? ((ad.city ? ad.city + ", " : "") + ad.country) : (ad.city || ""))}</span>
        <span>🕒 ${formatDate(ad.created)}</span>
        ${ad.phone ? `<span>📞 ${escapeHtml(ad.phone)}</span>` : ''}
        ${ad.paidUntil ? `<span>✓ ${t('active_until')} ${new Date(ad.paidUntil).toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : currentLang === 'ru' ? 'ru-RU' : 'en-GB')}</span>` : ''}
        ${ad.brand ? `<span>🏷️ ${escapeHtml(ad.brand)}</span>` : ''}
        ${ad.model ? `<span>📌 ${escapeHtml(ad.model)}</span>` : ''}
      `;

      const specs = buildSpecsHTML(ad);
      const descBlock = ad.desc
        ? `<div class="modal-section-label">${t('label_desc')}</div><div>${escapeHtml(ad.desc)}</div>`
        : '';
      document.getElementById('modal-desc').innerHTML =
        (specs ? `<div class="modal-section-label">${t('label_params')}</div>${specs}` : '') +
        `<div style="margin-top:${specs ? '20px' : '0'}">${descBlock}</div>`;

      const actions = document.getElementById('modal-actions');
const favBtn = `<button class="btn btn-outline" data-action="fav" data-id="${escapeAttr(ad.id)}">${isFav(ad.id) ? '♥ ' + t('btn_unfav') : '♡ ' + t('btn_fav')}</button>`;
const shareBtn = `<button class="btn btn-outline" data-action="share" data-id="${ad.id}">${t('btn_share') || 'Udostępnij'}</button>`;
const viewsInfo = `<span class="views-badge">👁 ${ad.views || 1}</span>`;

const isOwner = !!currentUser && ad.userId === currentUser.id;
const isAdminUser = !!currentUser && isAdmin();
const canManage = !!currentUser && (isOwner || isAdminUser);
const canChat = !!currentUser && !isOwner;   // писать можно, если объявление не своё
const canReport = !!currentUser && !isOwner; // жаловаться можно, если не своё

// Кнопки управления (для владельца или админа)
let manageBtns = '';
if (canManage) {
  const boosted = ad.boostedUntil && ad.boostedUntil > Date.now();
  manageBtns = `
    <button class="btn btn-primary" data-action="edit-ad" data-id="${escapeAttr(ad.id)}">${t('btn_edit')}</button>
    <button class="btn btn-outline" data-action="boost" data-id="${escapeAttr(ad.id)}" ${boosted ? 'disabled' : ''}>${boosted ? t('btn_boosted') : t('btn_boost')}</button>
    <button class="btn btn-danger" data-action="delete-ad" data-id="${escapeAttr(ad.id)}">${t('btn_delete')}</button>
  `;
}

// Кнопка чата (для не-владельца: обычный пользователь или админ на чужое)
const chatBtn = canChat
  ? `<button class="btn btn-primary" data-action="h23-chat" data-id="${ad.id}">💬 ${t('btn_write_seller')}</button>`
  : '';

// Кнопка звонка (у всех, если есть телефон)
const callBtn = ad.phone
  ? `<a class="btn btn-primary" href="tel:${String(ad.phone).replace(/[^+\d]/g,'')}">${t('btn_call')}</a>`
  : '';

// Кнопка жалобы (для не-владельца)
const reportBtn = canReport
  ? `<button class="btn btn-outline v2-report" data-action="h23-report" data-id="${ad.id}">⚠️ ${t('btn_report')}</button>`
  : '';

actions.innerHTML = manageBtns + chatBtn + callBtn + favBtn + shareBtn + reportBtn + viewsInfo;

      document.getElementById('modal').classList.add('open');
    }

    function galleryPrev() { showGalleryImage(galleryIndex - 1); }
    function galleryNext() { showGalleryImage(galleryIndex + 1); }
    
    function showGalleryImage(index) {
      if (!galleryAdId) return;
      const ad = ads.find(a => a.id === galleryAdId);
      const imgs = ad ? getAdImages(ad) : [];
      if (!imgs.length) return;
      galleryIndex = (index + imgs.length) % imgs.length;
      const main = document.getElementById('modal-main-img');
      if (main) main.src = imgs[galleryIndex];
      document.querySelectorAll('#modal-gallery img').forEach((x, i) => {
        x.classList.toggle('active', i === galleryIndex);
      });
    }

    function setModalPhoto(adId, index) {
      const ad = ads.find(a => a.id === adId);
      if (!ad) return;
      const images = getAdImages(ad);
      if (!images[index]) return;
      galleryAdId = adId;
      galleryIndex = index;
      const main = document.getElementById('modal-main-img');
      if (main) main.src = images[index];
      document.querySelectorAll('#modal-gallery img').forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function editAd(id) {
      const ad = ads.find(a => a.id === id);
      if (!ad) return;
      
      if (!currentUser || ad.userId !== currentUser.id) {
        showToast(t('toast_edit_forbidden'));
        return;
      }
      
      closeModal();
      showPage('add');
      
      document.getElementById('f-category').value = ad.category;
      toggleCategoryFields();
      
      if (ad.category === 'auto') {
        if (ad.brand) {
          const brandSelect = document.getElementById('f-auto-brand');
          brandSelect.value = ad.brand;
          updateAutoModels();
          if (ad.model) {
            document.getElementById('f-auto-model').value = ad.model;
          }
        }
        if (ad.year) document.getElementById('f-year-auto').value = ad.year;
        if (ad.mileage) document.getElementById('f-mileage-auto').value = ad.mileage;
        if (ad.fuel) document.getElementById('f-fuel').value = ad.fuel;
        if (ad.gearbox) document.getElementById('f-gearbox').value = ad.gearbox;
        if (ad.condition) document.getElementById('f-condition-auto').value = ad.condition;
        generateAutoTitle();
        document.getElementById('f-price').value = ad.price || '';
        document.getElementById('f-city').value = ad.city || '';
        document.getElementById('f-desc').value = ad.desc || '';
      } else if (ad.category === 'moto') {
        if (ad.brand) {
          const brandSelect = document.getElementById('f-moto-brand');
          brandSelect.value = ad.brand;
          updateMotoModels();
          if (ad.model) {
            document.getElementById('f-moto-model').value = ad.model;
          }
        }
        if (ad.year) document.getElementById('f-year-moto').value = ad.year;
        if (ad.mileage) document.getElementById('f-mileage-moto').value = ad.mileage;
        if (ad.engine) document.getElementById('f-engine').value = ad.engine;
        if (ad.condition) document.getElementById('f-condition-moto').value = ad.condition;
        generateMotoTitle();
        document.getElementById('f-price-moto').value = ad.price || '';
        document.getElementById('f-city-moto').value = ad.city || '';
        document.getElementById('f-desc').value = ad.desc || '';
      } else if (ad.category === 'realty') {
        if (ad.area) document.getElementById('f-area').value = ad.area;
        if (ad.rooms) document.getElementById('f-rooms').value = ad.rooms;
        if (ad.floor) document.getElementById('f-floor').value = ad.floor;
        if (ad.deal) document.getElementById('f-deal').value = ad.deal;
        if (ad.propType) document.getElementById('f-prop-type').value = ad.propType;
        generateRealtyTitle();
        document.getElementById('f-price-realty').value = ad.price || '';
        const locType = ad.locationType || (ad.country && ad.country !== 'Polska' ? 'abroad' : 'pl');
        const locSel = document.getElementById('f-location-type');
        if (locSel) locSel.value = locType;
        onRealtyLocationTypeChange();
        if (locType === 'abroad') {
          if (ad.country) document.getElementById('f-country').value = ad.country;
          document.getElementById('f-city-abroad').value = ad.city || '';
        } else {
          const citySel = document.getElementById('f-city-realty');
          const other = document.getElementById('f-city-realty-other');
          if (citySel && ad.city) {
            const found = Array.from(citySel.options).some(o => o.value === ad.city);
            if (found) citySel.value = ad.city;
          if (typeof onRealtyCityChange === 'function') onRealtyCityChange();
            else {
              citySel.value = '__other__';
              onRealtyCityChange();
              if (other) other.value = ad.city;
            }
          }
          if (ad.district) document.getElementById('f-district').value = ad.district;
        }
        document.getElementById('f-desc').value = ad.desc || '';
      }
      
      // Common fields
      document.getElementById('f-phone').value = ad.phone || '';
        const setV = (id, v) => { const el = document.getElementById(id); if (el && v != null) el.value = v; };
        setV('f-body-type', ad.bodyType);
        setV('f-engine-capacity', ad.engineCapacity);
        setV('f-power-auto', ad.power);
        setV('f-drive-type', ad.driveType);
        setV('f-doors', ad.doors);
        setV('f-polish-origin', ad.polishOrigin);
        setV('f-damaged', ad.damaged);
        setV('f-accident-free', ad.accidentFree);
        setV('f-first-owner', ad.firstOwner);
        setV('f-moto-type', ad.motoType);
        setV('f-power-moto', ad.power);
        setV('f-drive-moto', ad.driveType);
        setV('f-engine-type', ad.engineType);
        setV('f-license-cat', ad.licenseCategory);
        setV('f-build-year', ad.buildYear);
        setV('f-market-type', ad.marketType);
        setV('f-heating', ad.heating);
        setV('f-condition-type', ad.conditionType);
        setV('f-furnished', ad.furnished);
        setV('f-parking', ad.parking);
        setV('f-elevator', ad.elevator);
        setV('f-balcony', ad.balcony);
        setV('f-energy-class', ad.energyClass);
        setV('f-beach-distance', ad.beachDistance);
        setV('f-rental-yield', ad.rentalYield);

      
      const existingImages = getAdImages(ad);
      pendingPhotos = existingImages.slice(0, 8);
      renderPhotoPreviews();
      
      window.editingAdId = id;
      const submitBtn = document.querySelector('#ad-form button[type=submit]');
      if (submitBtn) submitBtn.textContent = t('btn_save');
      showToast(t('toast_editing'));
    }

async function boostAd(id) {
  const ad = ads.find(a => a.id === id);
  if (!ad) return;

  if (!currentUser || ad.userId !== currentUser.id) {
    showToast(t('toast_boost_forbidden'));
    return;
  }

  try {
    const payData = await API.payDemo({ adId: ad.id, plan: 'boost', payMethod: 'demo' });
    if (payData && payData.ad) {
     
      Object.assign(ad, payData.ad);
    } else {
     
      ad.boostedUntil = Date.now() + 24 * 60 * 60 * 1000;
      ad.boostedAt = Date.now();
    }
  } catch (e) {
    showToast((e && e.message) || 'Błąd płatności');
    return;
  }

  closeModal();
  showToast(t('toast_boosted'));
  renderHome();
  renderMy();
  if (document.getElementById('page-auto')?.classList.contains('active')) renderCategory('auto');
  if (document.getElementById('page-moto')?.classList.contains('active')) renderCategory('moto');
  if (document.getElementById('page-realty')?.classList.contains('active')) renderCategory('realty');
  if (document.getElementById('page-abroad')?.classList.contains('active')) renderCategory('abroad');
}

    function closeModal(e) {
      if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) return;
      document.getElementById('modal').classList.remove('open');
      galleryAdId = null;
      galleryIndex = 0;
    }

    async function deleteAd(id) {
      const ad = ads.find(a => a.id === id);
      if (!ad) return;
      
      if (!currentUser || (!isAdmin() && ad.userId !== currentUser.id)) {
        showToast(t('toast_delete_forbidden'));
        return;
      }
      
      if (!confirm(t('confirm_delete'))) return;
      try {
        try {
          await API.deleteAd(id);
        } catch (e) {
          showToast(e.message || 'Błąd usuwania');
          return;
        }
      } catch (e) {
        console.error('DELETE error:', e);
        showToast('Błąd usuwania');
        return;
      }
      ads = ads.filter(a => a.id !== id);
      closeModal();
      showToast(t('toast_deleted'));
      renderMy();
      renderHome();
    }

function toggleCategoryFields() {
  const cat = document.getElementById('f-category').value;
  document.querySelectorAll('.form-section').forEach(el => el.classList.remove('is-visible'));
  const showSec = (id) => { const el = document.getElementById(id); if (el) el.classList.add('is-visible'); };

  if (cat === 'auto') { showSec('form-section-auto-params'); showSec('form-section-auto-condition'); }
  else if (cat === 'moto') { showSec('form-section-moto'); }
  else if (cat === 'realty') { showSec('form-section-realty'); }
  else if (cat === 'realty_abroad') { showSec('form-section-realty'); showSec('abroad-specs-acc'); }

const isAbroad = cat === 'realty_abroad';
const actualCat = isAbroad ? 'realty' : cat;
if (cat === 'realty') {
  document.getElementById('realty-abroad-fields').style.display = 'none';
}

if (cat === 'realty_abroad') {
  document.getElementById('realty-abroad-fields').style.display = 'flex';
  document.getElementById('realty-pl-fields').style.display = 'none';
  
}
if (cat === 'realty') {
  document.getElementById('realty-pl-fields').style.display = '';
  document.getElementById('realty-abroad-fields').style.display = 'none';
  
}
if (cat !== 'realty' && cat !== 'realty_abroad') {
  
}

  document.querySelectorAll('.category-fields').forEach(el => {
    el.style.display = 'none';

    el.querySelectorAll('input, select, textarea').forEach(field => {
      field.required = false;
    });
  });

  if (cat === 'auto') {
    populateAutoBrands();
    document.getElementById('f-auto-model').innerHTML = '<option value="">Wybierz model...</option>';
    document.getElementById('auto-title-text').textContent = 'Wybierz markę, model i rok';
    document.getElementById('f-title').value = '';
  } else if (cat === 'moto') {
    populateMotoBrands();
    document.getElementById('f-moto-model').innerHTML = '<option value="">Wybierz model...</option>';
    document.getElementById('moto-title-text').textContent = 'Wybierz markę, model i rok';
    const rtt = document.getElementById('realty-title-text');
    if (rtt) { rtt.textContent = 'Wybierz typ, powierzchnię i liczbę pokoi'; rtt.style.color = 'var(--muted)'; }
    const ftr = document.getElementById('f-title-realty');
    if (ftr) ftr.value = '';
    document.getElementById('f-title-moto').value = '';
  }

  if (cat) {
    const block = document.getElementById('fields-' + actualCat);

    if (block) {
  block.style.display = 'block';

  block.querySelectorAll('input, select, textarea').forEach(field => {
    field.required = field.offsetParent !== null;
  });

  if (cat === 'realty') {
    document.getElementById('f-district').required = false;
  }
if (cat === 'realty_abroad') {
  document.getElementById('f-district').required = false;
  document.getElementById('f-city-abroad').required = false;
}
}
  }
}
   

    let pendingAd = null;
    let selectedPayMethod = 'blik';

    function getAdPrice() {
      if (currentUser && currentUser.type === 'business') {
        return { plan: 'business', amount: 14.99, days: 15, labelKey: 'biz_single' };
      }
      return { plan: 'basic', amount: 1.99, days: 15, labelKey: 'plan_basic' };
    }

    
    function collectExtraSpecs(category) {
      const g = (id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const v = (el.value || '').trim();
        return v === '' ? null : v;
      };
      const num = (id) => {
        const v = g(id);
        if (v == null) return null;
        const n = Number(v);
        return Number.isFinite(n) ? n : null;
      };
      const o = {};
      if (category === 'auto') {
        o.bodyType = g('f-body-type');
        o.engineCapacity = num('f-engine-capacity');
        o.power = num('f-power-auto');
        o.driveType = g('f-drive-type');
        o.doors = g('f-doors');
        o.polishOrigin = g('f-polish-origin');
        o.damaged = g('f-damaged');
        o.accidentFree = g('f-accident-free');
        o.firstOwner = g('f-first-owner');
      } else if (category === 'moto') {
        o.motoType = g('f-moto-type');
        o.power = num('f-power-moto');
        o.driveType = g('f-drive-moto');
        o.engineType = g('f-engine-type');
        o.licenseCategory = g('f-license-cat');
      } else if (category === 'realty' || category === 'realty_abroad') {
        o.buildYear = num('f-build-year');
        o.marketType = g('f-market-type');
        o.heating = g('f-heating');
        o.conditionType = g('f-condition-type');
        o.furnished = g('f-furnished');
        o.parking = g('f-parking');
        o.elevator = g('f-elevator');
        o.balcony = g('f-balcony');
        if (category === 'realty_abroad') {
          o.energyClass = g('f-energy-class');
          o.beachDistance = num('f-beach-distance');
          o.rentalYield = num('f-rental-yield');
        }
      }
      Object.keys(o).forEach(k => { if (o[k] == null || o[k] === '') delete o[k]; });
      return o;
    }

function submitAd(e) {
      const formEl = document.getElementById('ad-form');
      if (formEl) formEl.classList.add('was-validated');
      e.preventDefault();
      if (!currentUser) {
        goAdd();
        return;
      }
      
      const category = document.getElementById('f-category').value;
      if (!category) {
        showToast('Wybierz kategorię');
        return;
      }
      const phoneVal = (document.getElementById('f-phone')?.value || '').trim();
      if (!phoneVal || phoneVal.replace(/\D/g, '').length < 6) {
        showToast(t('toast_phone_required') || 'Podaj numer telefonu kontaktowego');
        document.getElementById('f-phone')?.focus();
        return;
      }

      
      let title = '';
      let brand = null;
      let model = null;
      let price = 0;
      let city = '';
      
      if (category === 'auto') {
        const brandSelect = document.getElementById('f-auto-brand');
        const modelSelect = document.getElementById('f-auto-model');
        const yearInput = document.getElementById('f-year-auto');
        
        if (!brandSelect.value) {
          showToast('Wybierz markę');
          return;
        }
        if (!modelSelect.value) {
          showToast('Wybierz model');
          return;
        }
        if (!yearInput.value) {
          showToast('Wpisz rok');
          return;
        }
        if (!document.getElementById('f-mileage-auto').value) {
          showToast('Wypełnij przebieg!');
          return;
        }
        
        brand = brandSelect.value;
        model = modelSelect.value;
        title = brand + ' ' + model + ' ' + yearInput.value;
        price = Number(document.getElementById('f-price').value);
        city = document.getElementById('f-city').value.trim();
        document.getElementById('f-title').value = title;
      } else if (category === 'moto') {
        const brandSelect = document.getElementById('f-moto-brand');
        const modelSelect = document.getElementById('f-moto-model');
        const yearInput = document.getElementById('f-year-moto');
        
        if (!brandSelect.value) {
          showToast('Wybierz markę');
          return;
        }
        if (!modelSelect.value) {
          showToast('Wybierz model');
          return;
        }
        if (!yearInput.value) {
          showToast('Wpisz rok');
          return;
        }
        if (!document.getElementById('f-mileage-moto').value) {
          showToast('Wypełnij przebieg!');
          return;
        }
        
        brand = brandSelect.value;
        model = modelSelect.value;
        title = brand + ' ' + model + ' ' + yearInput.value;
        price = Number(document.getElementById('f-price-moto').value);
        city = document.getElementById('f-city-moto').value.trim();
        document.getElementById('f-title-moto').value = title;
      } else if (category === 'realty' || category === 'realty_abroad') {
        title = document.getElementById('f-title-realty').value.trim();
        if (!title) {
          showToast('Wypełnij tytuł!');
          return;
        }
        if (!document.getElementById('f-area').value) {
          showToast('Wypełnij powierzchnię!');
          return;
        }
        price = Number(document.getElementById('f-price-realty').value);
        city = (typeof getRealtyCityValue==='function'?getRealtyCityValue():document.getElementById('f-city-realty').value.trim());
      }

     
      const ad = {
        id: generateId(),
        category,
        title: title,
        price: price,
        city: city,
        desc: document.getElementById('f-desc').value.trim(),
        image: pendingPhotos[0] || '',
        images: pendingPhotos.slice(),
        phone: document.getElementById('f-phone').value.trim() || currentUser.phone || '',
        created: Date.now(),
        userId: currentUser.id,
        brand: brand,
        model: model
      };

      if (category === 'auto') {
        ad.year = document.getElementById('f-year-auto').value || null;
        ad.mileage = document.getElementById('f-mileage-auto').value || null;
        ad.fuel = document.getElementById('f-fuel').value || null;
        ad.gearbox = document.getElementById('f-gearbox').value || null;
ad.color = document.getElementById('f-color-auto').value || null;
        ad.condition = document.getElementById('f-condition-auto').value || null;
      } else if (category === 'moto') {
        ad.year = document.getElementById('f-year-moto').value || null;
        ad.mileage = document.getElementById('f-mileage-moto').value || null;
        ad.engine = document.getElementById('f-engine').value || null;
        ad.condition = document.getElementById('f-condition-moto').value || null;
      } else if (category === 'realty' || category === 'realty_abroad') {
        ad.area = document.getElementById('f-area').value || null;
        ad.rooms = document.getElementById('f-rooms').value || null;
        ad.floor = document.getElementById('f-floor').value.trim() || null;
        ad.deal = document.getElementById('f-deal').value || null;
        ad.propType = document.getElementById('f-prop-type').value || null;
        ad.locationType = category === 'realty_abroad' ? 'abroad' : 'pl';
        ad.district = document.getElementById('f-district')?.value.trim() || null;
        if (ad.locationType === 'abroad') {
          ad.country = document.getElementById('f-country')?.value || null;
          ad.city = (document.getElementById('f-city-abroad')?.value || '').trim();
        } else {
          ad.country = 'Polska';
          ad.city = (typeof getRealtyCityValue === 'function' ? getRealtyCityValue() : '') || city;
        }
        if (ad.locationType !== 'abroad' && !ad.city) {
  showToast(t('toast_fill_required') || 'Uzupełnij lokalizację');
  return;
}
        if (ad.locationType === 'abroad' && !ad.country) { showToast(t('toast_fill_required') || 'Wybierz kraj'); return; }
      }

      Object.assign(ad, collectExtraSpecs(category));

      // Normalize city + region for PL locations
      if (ad.city && typeof resolveCityName === 'function') {
        const canonical = resolveCityName(ad.city);
        if (canonical) ad.city = canonical;
      }
      if (ad.locationType === 'abroad') {
        ad.region = ad.country || null;
      } else if (ad.city && typeof CITY_TO_REGION !== 'undefined' && CITY_TO_REGION[ad.city]) {
        ad.region = CITY_TO_REGION[ad.city];
      } else {
        ad.region = null;
      }

      if (window.editingAdId) {
        const idx = ads.findIndex(a => a.id === window.editingAdId);
        if (idx >= 0) {
          ad.id = window.editingAdId;
          ad.userId = ads[idx].userId; // ownership is immutable during edit
          delete ad.isMine;
          ad.paid = ads[idx].paid;
          ad.status = ads[idx].status || 'approved';
          ad.paidUntil = ads[idx].paidUntil;
          ad.boostedUntil = ads[idx].boostedUntil;
          ad.boostedAt = ads[idx].boostedAt;
          ad.created = ads[idx].created;
          if (pendingPhotos.length === 0 && ads[idx].images && ads[idx].images.length) {
            ad.images = ads[idx].images.slice();
            ad.image = ads[idx].image || '';
          }
          ads[idx] = ad;
          saveAds();
          window.editingAdId = null;
          document.getElementById('ad-form').reset();
          pendingPhotos = [];
          renderPhotoPreviews();
          toggleCategoryFields();
          const submitBtn = document.querySelector('#ad-form button[type=submit]');
          if (submitBtn) submitBtn.textContent = t('btn_publish');
          showToast(t('toast_saved'));
          showPage('my');
          return;
        }
      }
      pendingAd = ad;
      openPayModal();
    }

    function openPayModal() {
      const plan = getAdPrice();
      const info = document.getElementById('pay-plan-info');
      info.innerHTML = `
        <div class="pay-plan-row"><span>${t(plan.labelKey)}</span><strong>${plan.days} ${t('days')}</strong></div>
        <div class="pay-plan-row"><span>${t('pay_total')}</span><span class="pay-total">${plan.amount.toFixed(2).replace('.', ',')} zł</span></div>
      `;
      const promoInput = document.getElementById('pay-promo');
      const promoMsg = document.getElementById('pay-promo-msg');
      const promoBox = document.getElementById('pay-promo-box');
      if (promoInput) promoInput.value = '';
      if (promoMsg) promoMsg.textContent = '';
      if (promoBox) promoBox.style.display = selectedPayMethod === 'promo' ? 'block' : 'none';
      document.getElementById('pay-body').style.display = 'block';
      document.getElementById('pay-processing').style.display = 'none';
      document.getElementById('pay-modal').classList.add('open');
      document.querySelectorAll('#pay-modal [data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
      });
    }

    function closePayModal(e) {
      if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) return;
      document.getElementById('pay-modal').classList.remove('open');
      pendingAd = null;
    }

    function selectPayMethod(el) {
      document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('active'));
      el.classList.add('active');
      selectedPayMethod = el.dataset.method;
      const box = document.getElementById('pay-promo-box');
      if (box) box.style.display = selectedPayMethod === 'promo' ? 'block' : 'none';
    }

    async function applyPromoPreview() {
      const input = document.getElementById('pay-promo');
      const msg = document.getElementById('pay-promo-msg');
      const code = (input && input.value || '').trim();
      if (!code) {
        if (msg) msg.textContent = '';
        return;
      }
      try {
        const data = await API.request('/api/payments/promo-check', {
          method: 'POST',
          body: JSON.stringify({ promoCode: code })
        });
        const plan = getAdPrice();
        let amount = plan.amount * (100 - (data.percent || 0)) / 100;
        if (data.percent >= 100) amount = 0;
        const days = data.days || plan.days;
        if (msg) {
          msg.style.color = 'var(--primary)';
          msg.textContent = (data.label || 'OK') + ' — ' + amount.toFixed(2).replace('.', ',') + ' zł / ' + days + ' dni';
        }
        const total = document.querySelector('#pay-plan-info .pay-total');
        if (total) total.textContent = amount.toFixed(2).replace('.', ',') + ' zł';
      } catch (e) {
        if (msg) {
          msg.style.color = '#c0392b';
          msg.textContent = (e.data && e.data.error) || e.message || 'Błędny kod';
        }
      }
    }

    async function processPayment() {
      if (!pendingAd) return;
      document.getElementById('pay-body').style.display = 'none';
      document.getElementById('pay-processing').style.display = 'block';
      document.querySelectorAll('#pay-processing [data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
      });

      const plan = getAdPrice();
      setTimeout(async () => {
        if (window.editingAdId) {
          const idx = ads.findIndex(a => a.id === window.editingAdId);
          if (idx >= 0) {
            const existing = ads[idx];

            // Собираем чистый payload: только те поля,
            // которые обычный пользователь МОЖЕТ менять.
            const EDITABLE_FIELDS = [
              'title', 'category', 'price', 'city', 'desc',
              'image', 'images', 'phone',
              'brand', 'model', 'color', 'year', 'mileage',
              'fuel', 'gearbox', 'condition', 'engine',
              'area', 'rooms', 'floor', 'deal', 'propType',
              'locationType', 'country', 'district', 'region',
              // extra-параметры (уходят в JSONB extra на сервере)
              'bodyType', 'engineCapacity', 'power', 'driveType', 'doors',
              'polishOrigin', 'damaged', 'accidentFree', 'firstOwner',
              'motoType', 'engineType', 'licenseCategory',
              'buildYear', 'marketType', 'heating', 'conditionType',
              'furnished', 'parking', 'elevator', 'balcony',
              'energyClass', 'beachDistance', 'rentalYield'
            ];

            const payload = {};
            for (const key of EDITABLE_FIELDS) {
              if (pendingAd[key] !== undefined) {
                payload[key] = pendingAd[key];
              }
            }

            // Если фото не трогали — оставляем старые
            if (pendingPhotos.length === 0 && existing.images && existing.images.length) {
              payload.images = existing.images.slice();
              payload.image = existing.image || '';
            }

            // Не теряем бренд/модель, если пользователь их не заполнял
            if (!payload.brand && existing.brand) payload.brand = existing.brand;
            if (!payload.model && existing.model) payload.model = existing.model;

            try {
              const updated = await API.updateAd(window.editingAdId, payload);
              ads[idx] = updated && updated.id ? updated : { ...existing, ...payload };
            } catch (e) {
              console.error('PUT edit error:', e);
              showToast((e && e.message) || 'Błąd zapisu');
              ads[idx] = { ...existing, ...payload };
            }
          }

          window.editingAdId = null;
          const submitBtn = document.querySelector('#ad-form button[type=submit]');
          if (submitBtn) submitBtn.textContent = t('btn_publish');
          pendingAd = null;
          document.getElementById('ad-form').reset();
          pendingPhotos = [];
          renderPhotoPreviews();
          toggleCategoryFields();
          document.getElementById('pay-modal').classList.remove('open');
          showToast(t('toast_saved'));
          showPage('my');
       
        } else {
          // Шаг 5: создаём без paid, оплату подтверждает сервер
          pendingAd.status = 'pending';
          delete pendingAd.paid;
          delete pendingAd.paidUntil;
          delete pendingAd.paidAmount;
          delete pendingAd.payMethod;

          let created;
          try {
            created = await API.createAd(pendingAd);
          } catch (e) {
            console.error('POST error:', e);
            showToast(e.message || 'Ошибка при сохранении');
            pendingAd = null;
            document.getElementById('pay-modal').classList.remove('open');
            return;
          }

          let payOk = false;
          let payErrMsg = '';
          try {
            const promoEl = document.getElementById('pay-promo');
            const promoCode = (promoEl && promoEl.value || '').trim();
            const payData = await API.payDemo({
              adId: created.id,
              plan: plan.plan || 'basic',
              payMethod: selectedPayMethod || 'demo',
              promoCode: promoCode || undefined
            });
            if (payData && payData.ad) created = payData.ad;
            payOk = true;
          } catch (payErr) {
            console.error('demo payment failed', payErr);
            payErrMsg = (payErr && payErr.message) || 'Płatność nie powiodła się';
          }

          if (!payOk) {
            try { await API.deleteAd(created.id); } catch (e) { /* ignore */ }
            showToast(payErrMsg || 'Płatność nie powiodła się — spróbuj ponownie');
            document.getElementById('pay-modal').classList.remove('open');
            // leave form data — user can retry
            return;
          }

          ads.unshift(created && created.id ? created : pendingAd);
          pendingAd = null;
          document.getElementById('ad-form').reset();
          pendingPhotos = [];
          renderPhotoPreviews();
          toggleCategoryFields();
          document.getElementById('pay-modal').classList.remove('open');
          showToast(t('toast_paid'));
          showPage('my');
        }
      }, 1800);
    }

    let toastTimer = null;
    function showToast(msg) {
      const toast = document.getElementById('toast');
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    // ========== PHOTOS ==========
    let pendingPhotos = [];

    function compressImage(file, maxW, quality) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = new Image();
          img.onload = function() {
            let w = img.width, h = img.height;
            if (w > maxW) {
              h = Math.round(h * maxW / w);
              w = maxW;
            }
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            resolve(canvas.toDataURL('image/jpeg', quality));
          };
          img.onerror = reject;
          img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    async function handlePhotoSelect(e) {
      const files = Array.from(e.target.files || []);
      if (!files.length) return;
      const remaining = 8 - pendingPhotos.length;
      if (remaining <= 0) {
        showToast(t('toast_max_photos'));
        e.target.value = '';
        return;
      }
      const toProcess = files.slice(0, remaining);
      for (const file of toProcess) {
        if (!file.type.startsWith('image/')) continue;
        try {
          const dataUrl = await compressImage(file, 900, 0.72);
          pendingPhotos.push(dataUrl);
        } catch (err) {
          console.error(err);
        }
      }
      renderPhotoPreviews();
      e.target.value = '';
    }

    function renderPhotoPreviews() {
      const box = document.getElementById('photo-previews');
      if (!box) return;
      box.innerHTML = pendingPhotos.map((src, i) => `
        <div class="photo-preview-wrap">
          <img class="photo-preview" src="${escapeHtml(safeImageUrl(src))}" alt="">
          <button type="button" data-action="remove-photo" data-idx="${i}" title="Usuń">×</button>
        </div>
      `).join('');
    }

    function removePhoto(i) {
      pendingPhotos.splice(i, 1);
      renderPhotoPreviews();
    }

    function getAdImages(ad) {
      if (!ad) return [];
      const raw = Array.isArray(ad.images) && ad.images.length ? ad.images : (typeof ad.image === 'string' && ad.image ? [ad.image] : []);
      return raw.map(safeImageUrl).filter(Boolean).slice(0, 8);
    }

    // ========== SEARCH ENHANCEMENTS ==========
    function setupQuickFilters(category) {
      const container = document.getElementById('quick-filters-' + category);
      if (!container) return;
      
      const options = {
        auto: [
          { label: 'Do 50 000 zł', filter: (a) => a.price <= 50000 },
          { label: 'Do 100 000 km', filter: (a) => (a.mileage || 0) <= 100000 },
          { label: 'Hybryda', filter: (a) => a.fuel === 'hybrid' },
          { label: 'Automat', filter: (a) => a.gearbox === 'auto' },
          { label: 'Od 2020', filter: (a) => (a.year || 0) >= 2020 }
        ],
        moto: [
          { label: 'Do 10 000 zł', filter: (a) => a.price <= 10000 },
          { label: 'Do 500 cm³', filter: (a) => (a.engine || 0) <= 500 },
          { label: 'Powyżej 600 cm³', filter: (a) => (a.engine || 0) >= 600 }
        ],
        realty: [
          { label: 'Do 300 000 zł', filter: (a) => a.price <= 300000 },
          { label: 'Do 50 m²', filter: (a) => (a.area || 0) <= 50 },
          { label: 'Powyżej 100 m²', filter: (a) => (a.area || 0) >= 100 },
          { label: 'Wynajem', filter: (a) => a.deal === 'rent' },
          { label: 'Sprzedaż', filter: (a) => a.deal === 'sale' }
        ]
      };
      
      const cats = options[category] || [];
      container.innerHTML = cats.map((opt, idx) => 
        `<button class="quick-filter-chip" data-filter="${idx}" data-action="quick-filter" data-cat="${category}" data-idx="${idx}">${opt.label}</button>`
      ).join('');
    }

    function applyQuickFilter(category, idx) {
      const container = document.getElementById('quick-filters-' + category);
      const chips = container.querySelectorAll('.quick-filter-chip');
      chips.forEach(c => c.classList.remove('active'));
      chips[idx].classList.add('active');
      
      const options = {
        auto: [
          { label: 'Do 50 000 zł', filter: (a) => a.price <= 50000 },
          { label: 'Do 100 000 km', filter: (a) => (a.mileage || 0) <= 100000 },
          { label: 'Hybryda', filter: (a) => a.fuel === 'hybrid' },
          { label: 'Automat', filter: (a) => a.gearbox === 'auto' },
          { label: 'Od 2020', filter: (a) => (a.year || 0) >= 2020 }
        ],
        moto: [
          { label: 'Do 10 000 zł', filter: (a) => a.price <= 10000 },
          { label: 'Do 500 cm³', filter: (a) => (a.engine || 0) <= 500 },
          { label: 'Powyżej 600 cm³', filter: (a) => (a.engine || 0) >= 600 }
        ],
        realty: [
          { label: 'Do 300 000 zł', filter: (a) => a.price <= 300000 },
          { label: 'Do 50 m²', filter: (a) => (a.area || 0) <= 50 },
          { label: 'Powyżej 100 m²', filter: (a) => (a.area || 0) >= 100 },
          { label: 'Wynajem', filter: (a) => a.deal === 'rent' },
          { label: 'Sprzedaż', filter: (a) => a.deal === 'sale' }
        ]
      };
      
      const opt = options[category][idx];
      if (!opt) return;
      
      const input = document.getElementById(category + '-search');
      if (input) {
        input.value = opt.label;
        if (typeof saveSearchHistory === 'function') saveSearchHistory(category, opt.label);
        input.dispatchEvent(new Event('input'));
      }
    }

    function toggleAdvancedSearch(category) {
      const el = document.getElementById('advanced-' + category);
      if (el) {
        el.classList.toggle('open');
      }
    }

    function clearSearch(category) {
      document.getElementById(category + '-search').value = '';
      document.getElementById(category + '-min').value = '';
      document.getElementById(category + '-max').value = '';
      const el = document.getElementById(category + '-year-from');
      if (el) el.value = '';
      const el2 = document.getElementById(category + '-year-to');
      if (el2) el2.value = '';
      renderCategory(category);
    }

    function showSearchHistory(category) {
      const history = safeArray(STORAGE.json('search_history_' + category, []));
      if (history.length === 0) {
        showToast('Brak historii wyszukiwania');
        return;
      }
      
      const input = document.getElementById(category + '-search');
      const container = document.createElement('div');
      container.className = 'search-history';
      
      history.forEach(query => {
        const item = document.createElement('div');
        item.className = 'search-history-item';
        item.textContent = query;
        item.onclick = () => {
          input.value = query;
          input.dispatchEvent(new Event('input'));
          container.remove();
        };
        container.appendChild(item);
      });
      
      const parent = input.parentElement;
      parent.style.position = 'relative';
      const old = parent.querySelector('.search-history');
      if (old) old.remove();
      parent.appendChild(container);
      
      setTimeout(() => {
        document.addEventListener('click', function removeHistory(e) {
          if (!parent.contains(e.target)) {
            container.remove();
            document.removeEventListener('click', removeHistory);
          }
        });
      }, 10);
    }

    function saveSearchHistory(category, query) {
      if (!query || query.trim().length < 2) return;
      const history = safeArray(STORAGE.json('search_history_' + category, []));
      const cleaned = query.trim();
      const filtered = history.filter(q => q !== cleaned);
      filtered.unshift(cleaned);
      STORAGE.jsonSet('search_history_' + category, filtered.slice(0, 10));
    }

    function voiceSearch(category) {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('Twoja przeglądarka nie obsługuje wyszukiwania głosowego');
        return;
      }
      
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = currentLang === 'pl' ? 'pl-PL' : currentLang === 'ru' ? 'ru-RU' : 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const input = document.getElementById(category + '-search');
        input.value = transcript;
        input.dispatchEvent(new Event('input'));
        showToast('Szukano: ' + transcript);
      };
      
      recognition.onerror = () => {
        showToast('Nie udało się rozpoznać mowy. Spróbuj ponownie.');
      };
      
      recognition.start();
      showToast('Powiedz frazę...');
    }

    

    // ===== POLAND LOCATION HIERARCHY (województwo → miasta) =====
    const POLAND_REGIONS = {
      "Dolnośląskie": ["Wrocław","Wałbrzych","Legnica","Jelenia Góra","Lubin","Głogów","Świdnica","Bolesławiec","Oleśnica","Oława"],
      "Kujawsko-Pomorskie": ["Bydgoszcz","Toruń","Włocławek","Grudziądz","Inowrocław","Brodnica","Świecie","Chełmno"],
      "Lubelskie": ["Lublin","Chełm","Zamość","Biała Podlaska","Puławy","Kraśnik","Świdnik","Łuków"],
      "Lubuskie": ["Zielona Góra","Gorzów Wielkopolski","Nowa Sól","Żary","Żagań","Świebodzin","Międzyrzecz"],
      "Łódzkie": ["Łódź","Piotrków Trybunalski","Pabianice","Tomaszów Mazowiecki","Bełchatów","Zgierz","Skierniewice","Kutno","Radomsko","Sieradz"],
      "Małopolskie": ["Kraków","Tarnów","Nowy Sącz","Oświęcim","Chrzanów","Nowy Targ","Bochnia","Gorlice","Zakopane","Wadowice","Skawina","Wieliczka"],
      "Mazowieckie": ["Warszawa","Radom","Płock","Siedlce","Pruszków","Ostrołęka","Legionowo","Otwock","Piaseczno","Ciechanów","Żyrardów","Sochaczew","Mińsk Mazowiecki","Wołomin"],
      "Opolskie": ["Opole","Kędzierzyn-Koźle","Nysa","Brzeg","Kluczbork","Prudnik"],
      "Podkarpackie": ["Rzeszów","Przemyśl","Stalowa Wola","Mielec","Tarnobrzeg","Krosno","Dębica","Jarosław","Sanok"],
      "Podlaskie": ["Białystok","Suwałki","Łomża","Augustów","Bielsk Podlaski","Zambrów","Grajewo"],
      "Pomorskie": ["Gdańsk","Gdynia","Słupsk","Tczew","Wejherowo","Rumia","Starogard Gdański","Malbork","Sopot","Reda","Lębork","Chojnice"],
      "Śląskie": ["Katowice","Częstochowa","Sosnowiec","Gliwice","Zabrze","Bytom","Bielsko-Biała","Ruda Śląska","Rybnik","Tychy","Dąbrowa Górnicza","Chorzów","Jaworzno","Jastrzębie-Zdrój","Mysłowice","Siemianowice Śląskie","Piekary Śląskie","Świętochłowice","Żory","Mikołów","Cieszyn"],
      "Świętokrzyskie": ["Kielce","Ostrowiec Świętokrzyski","Starachowice","Skarżysko-Kamienna","Sandomierz","Końskie"],
      "Warmińsko-Mazurskie": ["Olsztyn","Elbląg","Ełk","Ostróda","Iława","Giżycko","Kętrzyn","Szczytno","Mrągowo"],
      "Wielkopolskie": ["Poznań","Kalisz","Konin","Piła","Ostrów Wielkopolski","Gniezno","Leszno","Luboń","Swarzędz","Śrem","Turek","Jarocin"],
      "Zachodniopomorskie": ["Szczecin","Koszalin","Stargard","Kołobrzeg","Świnoujście","Szczecinek","Police","Goleniów","Białogard"]
    };

    const POLAND_CITIES = (() => {
      const set = new Set();
      Object.values(POLAND_REGIONS).forEach(arr => arr.forEach(c => set.add(c)));
      return [...set].sort((a,b) => a.localeCompare(b, 'pl')) .concat(['Other']);
    })();

    const CITY_TO_REGION = (() => {
      const m = {};
      Object.entries(POLAND_REGIONS).forEach(([reg, cities]) => {
        cities.forEach(c => { m[c] = reg; });
      });
      return m;
    })();

    // EN / translit / common aliases → canonical Polish city name
    const CITY_ALIASES = {
      "warsaw": "Warszawa", "warszawa": "Warszawa",
      "krakow": "Kraków", "cracow": "Kraków", "krakau": "Kraków",
      "wroclaw": "Wrocław", "breslau": "Wrocław",
      "gdansk": "Gdańsk", "danzig": "Gdańsk",
      "gdynia": "Gdynia",
      "poznan": "Poznań", "posen": "Poznań",
      "lodz": "Łódź", "lodz": "Łódź",
      "szczecin": "Szczecin", "stettin": "Szczecin",
      "lublin": "Lublin",
      "katowice": "Katowice",
      "bialystok": "Białystok", "bialystok": "Białystok",
      "bydgoszcz": "Bydgoszcz",
      "rzeszow": "Rzeszów",
      "bielsko": "Bielsko-Biała", "bielsko-biala": "Bielsko-Biała", "bielsko biala": "Bielsko-Biała",
      "torun": "Toruń",
      "kielce": "Kielce",
      "olsztyn": "Olsztyn",
      "opole": "Opole",
      "gorzow": "Gorzów Wielkopolski", "gorzow wielkopolski": "Gorzów Wielkopolski",
      "zielona gora": "Zielona Góra", "zielona-gora": "Zielona Góra",
      "radom": "Radom",
      "czestochowa": "Częstochowa",
      "sosnowiec": "Sosnowiec",
      "gliwice": "Gliwice",
      "zabrze": "Zabrze",
      "bytom": "Bytom",
      "rybnik": "Rybnik",
      "tychy": "Tychy",
      "elblag": "Elbląg",
      "plock": "Płock",
      "walbrzych": "Wałbrzych",
      "wloclawek": "Włocławek",
      "tarnow": "Tarnów",
      "chorzow": "Chorzów",
      "kalisz": "Kalisz",
      "koszalin": "Koszalin",
      "legnica": "Legnica",
      "grudziadz": "Grudziądz",
      "slupsk": "Słupsk",
      "jaworzno": "Jaworzno",
      "nowy sacz": "Nowy Sącz",
      "jelenia gora": "Jelenia Góra",
      "siedlce": "Siedlce",
      "suwalki": "Suwałki",
      "lomza": "Łomża",
      "chelm": "Chełm",
      "przemysl": "Przemyśl",
      "sopot": "Sopot",
      "zakopane": "Zakopane",
      "oswiecim": "Oświęcim",
      "pruszkow": "Pruszków",
      "piaseczno": "Piaseczno",
      "legionowo": "Legionowo"
    };

    function normLoc(s) {
      return String(s || '')
        .toLocaleLowerCase('pl-PL')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ł/g, 'l')
        .replace(/[^a-z0-9\s\-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    /** Resolve free-text / EN / translit city to canonical catalog name */
    function resolveCityName(input) {
      if (!input) return null;
      const raw = String(input).trim();
      if (!raw) return null;
      // Exact catalog hit
      if (typeof CITY_TO_REGION !== 'undefined' && CITY_TO_REGION[raw]) return raw;
      const key = normLoc(raw);
      if (!key) return null;
      if (CITY_ALIASES[key]) return CITY_ALIASES[key];
      // Scan catalog cities by normalized name
      if (typeof POLAND_CITIES !== 'undefined') {
        const hit = POLAND_CITIES.find(c => c !== 'Other' && normLoc(c) === key);
        if (hit) return hit;
        // partial: "miasto Krakow" etc.
        const partial = POLAND_CITIES.find(c => c !== 'Other' && (key.includes(normLoc(c)) || normLoc(c).includes(key)));
        if (partial && normLoc(partial).length >= 4) return partial;
      } else if (typeof POLAND_REGIONS !== 'undefined') {
        for (const cities of Object.values(POLAND_REGIONS)) {
          const hit = cities.find(c => normLoc(c) === key);
          if (hit) return hit;
        }
      }
      return null;
    }

    function resolveRegionName(input) {
      if (!input) return null;
      const key = normLoc(input);
      if (typeof POLAND_REGIONS === 'undefined') return null;
      const hit = Object.keys(POLAND_REGIONS).find(r => normLoc(r) === key || key.includes(normLoc(r)) || normLoc(r).includes(key));
      return hit || null;
    }


    // Dzielnice (districts) for major cities
    const CITY_DISTRICTS = {
      "Warszawa": ["Bemowo","Białołęka","Bielany","Mokotów","Ochota","Praga-Południe","Praga-Północ","Rembertów","Śródmieście","Targówek","Ursus","Ursynów","Wawer","Wesoła","Wilanów","Włochy","Wola","Żoliborz"],
      "Kraków": ["Stare Miasto","Grzegórzki","Prądnik Czerwony","Prądnik Biały","Krowodrza","Bronowice","Zwierzyniec","Dębniki","Łagiewniki-Borek Fałęcki","Swoszowice","Podgórze Duchackie","Bieżanów-Prokocim","Podgórze","Czyżyny","Mistrzejowice","Bieńczyce","Wzgórza Krzesławickie","Nowa Huta"],
      "Wrocław": ["Fabryczna","Krzyki","Psie Pole","Stare Miasto","Śródmieście"],
      "Poznań": ["Stare Miasto","Nowe Miasto","Wilda","Grunwald","Jeżyce","Rataje","Winogrady","Piątkowo","Ławica","Podolany"],
      "Gdańsk": ["Śródmieście","Wrzeszcz","Oliwa","Przymorze","Zaspa","Chełm","Orunia","Siedlce","Suchanino","Osowa","Jasień","Piecki-Migowo","Brzeźno","Nowy Port","Stogi"],
      "Gdynia": ["Śródmieście","Orłowo","Redłowo","Witomino","Chylonia","Cisowa","Obłuże","Pogórze","Dąbrowa","Wielki Kack","Mały Kack","Karwiny"],
      "Szczecin": ["Śródmieście","Pogodno","Niebuszewo","Gumieńce","Prawobrzeże","Dąbie","Warszewo","Bezrzecze","Głębokie"],
      "Łódź": ["Bałuty","Górna","Polesie","Śródmieście","Widzew"],
      "Lublin": ["Czechów","Czuby","Dziesiąta","Kalinin","Rury","Śródmieście","Tatary","Wieniawa","Bronowice","Konstantynów"],
      "Katowice": ["Śródmieście","Koszutka","Bogucice","Zawodzie","Szopienice-Burowiec","Janów-Nikiszowiec","Giszowiec","Murcków","Piotrowice-Ochojec","Zarzecze","Kostuchna","Podlesie","Ligota-Panewniki","Brynów","Załęże","Osiedle Tysiąclecia","Dąb","Wełnowiec-Józefowiec"],
      "Białystok": ["Centrum","Białostoczek","Słoneczny Stok","Antoniuk","Wygoda","Dziesięciny","Bacieczki","Nowe Miasto","Piasta","Skorupy","Dołidy"],
      "Bydgoszcz": ["Bartodzieje","Błonie","Fordon","Kapuściska","Okole","Szwederowo","Śródmieście","Wilczak","Wyżyny","Bielawy","Flisy"],
      "Rzeszów": ["Śródmieście","Staroniwa","Zalesie","Baranówka","Nowe Miasto","Pobitno","Wilkowyja","Przybyszówka"],
      "Bielsko-Biała": ["Śródmieście","Aleksandrowice","Hałcnów","Komorowice","Stare Bielsko","Straconka","Wapienica","Lipnik"],
      "Toruń": ["Bielawy","Bydgoskie Przedmieście","Chełmińskie Przedmieście","Jakubskie Przedmieście","Mokre","Podgórz","Rubinkowo","Stare Miasto","Starotoruńskie Przedmieście"]
    };

    // location filter state: region / city / district
    const locFilter = {
      auto: { region: null, city: null, district: null },
      moto: { region: null, city: null, district: null },
      realty: { region: null, city: null, district: null }
    };
    let locGeoToken = 0;
    let locPanelCat = null;
    let locPanelView = 'regions'; // regions | cities | districts
    let locPanelRegion = null;
    let locPanelCity = null;

    function escLoc(s) {
      return String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    }

    function locLabel(cat) {
      const st = locFilter[cat] || {};
      if (st.district && st.city) return st.city + ' — ' + st.district;
      if (st.city) return st.city;
      if (st.region) return st.region;
      return (currentLang==='en' ? 'All Poland' : currentLang==='ru' ? 'Вся Польша' : 'Cała Polska');
    }

    function updateLocButtons(cat) {
      const el = document.getElementById(cat + '-loc-label');
      if (el) el.textContent = locLabel(cat);
    }

    function openLocPanel(cat) {
      closeLocPanel();
      // Opening panel for manual choice cancels pending auto-geo apply
      locGeoToken = (locGeoToken || 0) + 1;
      locPanelCat = cat;
      locPanelView = 'regions';
      locPanelRegion = null;
      locPanelCity = null;
      const panel = document.getElementById(cat + '-loc-panel');
      if (panel) {
        panel.classList.add('open');
        const search = document.getElementById(cat + '-loc-search');
        if (search) search.value = '';
        renderLocPanel(cat);
      }
    }

    function closeLocPanel() {
      document.querySelectorAll('.loc-panel.open').forEach(p => p.classList.remove('open'));
      locPanelCat = null;
    }

    function renderLocPanel(cat) {
      const list = document.getElementById(cat + '-loc-list');
      const head = document.getElementById(cat + '-loc-head');
      const search = document.getElementById(cat + '-loc-search');
      if (!list || !head) return;
      const q = (search?.value || '').trim().toLowerCase();
      let html = '';
      const st = locFilter[cat] || {};

      if (locPanelView === 'regions') {
        head.innerHTML = `<span>📍 ${currentLang==='en'?'Location':currentLang==='ru'?'Локация':'Lokalizacja'}</span>`;
        const geoTitle = currentLang==='en'
          ? 'Allow Handlio to use your location and benefit from your current position.'
          : currentLang==='ru'
          ? 'Разрешите Handlio использовать вашу геолокацию и текущее положение.'
          : 'Pozwól, aby Handlio używał Twojej lokalizacji i korzystaj ze swojego aktualnego położenia.';
        const geoSub = currentLang==='en'
          ? 'You can change location settings in your browser.'
          : currentLang==='ru'
          ? 'Настройки локации можно изменить в браузере.'
          : 'Ustawienia lokalizacji możesz zmienić w ustawieniach Twojej przeglądarki.';
        html += `<button type="button" class="loc-geo-box" id="${cat}-geo-box" data-action="geo" data-cat="${cat}">
          <div class="geo-title"><span>📍</span><span>${geoTitle}</span></div>
          <div class="geo-sub">${geoSub}</div>
        </button>`;
        html += `<button type="button" class="loc-item all" data-action="select-loc" data-cat="${cat}">🌐 ${currentLang==='en'?'All Poland':currentLang==='ru'?'Вся Польша':'Cała Polska'}</button>`;
        Object.keys(POLAND_REGIONS).sort((a,b)=>a.localeCompare(b,'pl')).forEach(reg => {
          if (q && !reg.toLowerCase().includes(q)) return;
          const active = st.region === reg && !st.city ? ' active' : '';
          html += `<button type="button" class="loc-item${active}" data-action="drill-region" data-cat="${cat}" data-region="${escLoc(reg)}"><span>${reg}</span><span class="arrow">›</span></button>`;
        });
      } else if (locPanelView === 'cities') {
        const reg = locPanelRegion;
        head.innerHTML = `<button type="button" data-action="loc-back-regions" data-cat="${cat}">‹</button><span>${reg}</span>`;
        html += `<button type="button" class="loc-item all" data-action="select-loc" data-cat="${cat}" data-region="${escLoc(reg)}">${currentLang==='en'?'Entire voivodeship':currentLang==='ru'?'Всё воеводство':'Całe województwo'}</button>`;
        (POLAND_REGIONS[reg] || []).forEach(city => {
          if (q && !city.toLowerCase().includes(q)) return;
          const hasDist = !!(CITY_DISTRICTS[city] && CITY_DISTRICTS[city].length);
          const active = st.city === city && !st.district ? ' active' : '';
          if (hasDist) {
            html += `<button type="button" class="loc-item${active}" data-action="drill-city" data-cat="${cat}" data-region="${escLoc(reg)}" data-city="${escLoc(city)}"><span>${city}</span><span class="arrow">›</span></button>`;
          } else {
            html += `<button type="button" class="loc-item${active}" data-action="select-loc" data-cat="${cat}" data-region="${escLoc(reg)}" data-city="${escLoc(city)}"><span>${city}</span></button>`;
          }
        });
      } else if (locPanelView === 'districts') {
        const reg = locPanelRegion;
        const city = locPanelCity;
        const districts = CITY_DISTRICTS[city] || [];
        head.innerHTML = `<button type="button" data-action="loc-back-cities" data-cat="${cat}">‹</button><span>${city}</span>`;
        html += `<button type="button" class="loc-item all" data-action="select-loc" data-cat="${cat}" data-region="${escLoc(reg)}" data-city="${escLoc(city)}">${currentLang==='en'?'Entire city':currentLang==='ru'?'Весь город':'Całe miasto'}</button>`;
        districts.forEach(d => {
          if (q && !d.toLowerCase().includes(q)) return;
          const active = st.district === d ? ' active' : '';
          html += `<button type="button" class="loc-item${active}" data-action="select-loc" data-cat="${cat}" data-region="${escLoc(reg)}" data-city="${escLoc(city)}" data-district="${escLoc(d)}"><span>${d}</span></button>`;
        });
      }
      list.innerHTML = html;
    }

    function drillLocRegion(cat, reg) {
      locPanelView = 'cities';
      locPanelRegion = reg;
      locPanelCity = null;
      const search = document.getElementById(cat + '-loc-search');
      if (search) search.value = '';
      renderLocPanel(cat);
    }

    function drillLocCity(cat, reg, city) {
      locPanelView = 'districts';
      locPanelRegion = reg;
      locPanelCity = city;
      const search = document.getElementById(cat + '-loc-search');
      if (search) search.value = '';
      renderLocPanel(cat);
    }


    // Approximate coordinates of major PL cities (for nearest-city detection)
    const CITY_COORDS = {
      "Warszawa":[52.2297,21.0122],"Kraków":[50.0647,19.9450],"Wrocław":[51.1079,17.0385],
      "Poznań":[52.4064,16.9252],"Gdańsk":[54.3520,18.6466],"Gdynia":[54.5189,18.5305],
      "Szczecin":[53.4285,14.5528],"Łódź":[51.7592,19.4560],"Lublin":[51.2465,22.5684],
      "Katowice":[50.2649,19.0238],"Białystok":[53.1325,23.1688],"Bydgoszcz":[53.1235,18.0084],
      "Rzeszów":[50.0413,21.9990],"Bielsko-Biała":[49.8224,19.0444],"Toruń":[53.0138,18.5984],
      "Kielce":[50.8661,20.6286],"Olsztyn":[53.7784,20.4801],"Opole":[50.6751,17.9213],
      "Gorzów Wielkopolski":[52.7325,15.2369],"Zielona Góra":[51.9355,15.5062],
      "Radom":[51.4027,21.1471],"Częstochowa":[50.8118,19.1203],"Sosnowiec":[50.2863,19.1040],
      "Gliwice":[50.2945,18.6714],"Zabrze":[50.3249,18.7857],"Bytom":[50.3480,18.9130],
      "Rybnik":[50.1022,18.5463],"Tychy":[50.1022,18.9860],"Elbląg":[54.1561,19.4044],
      "Płock":[52.5463,19.7065],"Wałbrzych":[50.7840,16.2843],"Włocławek":[52.6482,19.0677],
      "Tarnów":[50.0121,20.9858],"Chorzów":[50.2979,18.9540],"Kalisz":[51.7611,18.0910],
      "Koszalin":[54.1943,16.1715],"Legnica":[51.2070,16.1619],"Grudziądz":[53.4837,18.7536],
      "Słupsk":[54.4641,17.0286],"Jaworzno":[50.2053,19.2740],"Nowy Sącz":[49.6175,20.7153],
      "Jelenia Góra":[50.9045,15.7194],"Siedlce":[52.1679,22.2902],"Piotrków Trybunalski":[51.4055,19.7030],
      "Suwałki":[54.1010,22.9280],"Łomża":[53.1781,22.0590],"Chełm":[51.1431,23.4716],
      "Przemyśl":[49.7830,22.7673],"Stalowa Wola":[50.5827,22.0533],"Mielec":[50.2871,21.4239],
      "Ostrów Wielkopolski":[51.6550,17.8060],"Gniezno":[52.5347,17.5826],"Piła":[53.1515,16.7380],
      "Inowrocław":[52.7980,18.2620],"Ostróda":[53.6960,19.9640],"Ełk":[53.8280,22.3640],
      "Sopot":[54.4416,18.5601],"Wejherowo":[54.6057,18.2356],"Tczew":[54.0920,18.7770],
      "Stargard":[53.3367,15.0498],"Kołobrzeg":[54.1750,15.5830],"Świnoujście":[53.9100,14.2470],
      "Zakopane":[49.2992,19.9496],"Oświęcim":[50.0340,19.2100],"Pruszków":[52.1700,20.8120],
      "Legionowo":[52.4010,20.9270],"Piaseczno":[52.0730,21.0270]
    };

    function haversineKm(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const toRad = d => d * Math.PI / 180;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    }

    function nearestCity(lat, lon) {
      let best = null, bestD = Infinity;
      Object.entries(CITY_COORDS).forEach(([city, coords]) => {
        const d = haversineKm(lat, lon, coords[0], coords[1]);
        if (d < bestD) { bestD = d; best = city; }
      });
      return best ? { city: best, region: (CITY_TO_REGION[best] || null), distanceKm: bestD } : null;
    }

    async function reverseGeocodeNominatim(lat, lon) {
      try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&accept-language=pl`;
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
        if (!res.ok) return null;
        const data = await res.json();
        const a = data.address || {};
        const city = a.city || a.town || a.village || a.municipality || a.county || '';
        const district = a.suburb || a.neighbourhood || a.city_district || a.quarter || '';
        const state = a.state || '';
        return { city, district, state, raw: a };
      } catch (e) {
        return null;
      }
    }

    function useMyLocation(cat) {
      if (!navigator.geolocation) {
        showToast(currentLang==='en' ? 'Geolocation not supported' : currentLang==='ru' ? 'Геолокация не поддерживается' : 'Geolokalizacja nie jest obsługiwana');
        return;
      }
      const box = document.getElementById(cat + '-geo-box');
      if (box) box.classList.add('loading');
      showToast(currentLang==='en' ? 'Detecting location…' : currentLang==='ru' ? 'Определяем локацию…' : 'Wykrywanie lokalizacji…');

      // Invalidate previous geo callbacks; this request is current
      const myToken = ++locGeoToken;

      navigator.geolocation.getCurrentPosition(async (pos) => {
        if (myToken !== locGeoToken) return; // user already chose manually
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        let city = null, region = null, district = null;
        const geo = await reverseGeocodeNominatim(lat, lon);
        if (myToken !== locGeoToken) return;

        if (geo && geo.city) {
          city = (typeof resolveCityName === 'function' ? resolveCityName(geo.city) : null);
          if (city && CITY_TO_REGION[city]) region = CITY_TO_REGION[city];
          if (!region && geo.state && typeof resolveRegionName === 'function') {
            region = resolveRegionName(geo.state);
          }
          if (city && geo.district && CITY_DISTRICTS[city]) {
            const nd = normLoc(geo.district);
            const dMatch = CITY_DISTRICTS[city].find(d => {
              const nd0 = normLoc(d);
              return nd0 === nd || nd.includes(nd0) || nd0.includes(nd);
            });
            if (dMatch) district = dMatch;
          }
        }

        if (!city) {
          const near = nearestCity(lat, lon);
          if (near && near.distanceKm < 80) {
            city = near.city;
            region = near.region;
          }
        }

        if (myToken !== locGeoToken) return;
        if (box) box.classList.remove('loading');

        if (city) {
          if (!region && typeof CITY_TO_REGION !== 'undefined' && CITY_TO_REGION[city]) region = CITY_TO_REGION[city];
          if (myToken !== locGeoToken) return;
          // Apply directly (do not call selectLoc — it would bump token unnecessarily mid-flight)
          locFilter[cat] = {
            region: region ? String(region) : null,
            city: city ? String(city) : null,
            district: district ? String(district) : null
          };
          if (cat === 'realty') {
            const rc = document.getElementById('realty-city');
            const rco = document.getElementById('realty-country');
            if (rc) rc.value = '';
            if (rco) rco.value = '';
          }
          updateLocButtons(cat);
          closeLocPanel();
          if (typeof renderCategory === 'function') renderCategory(cat);
          const label = district ? `${city} — ${district}` : city;
          showToast((currentLang==='en' ? 'Location: ' : currentLang==='ru' ? 'Локация: ' : 'Lokalizacja: ') + label);
        } else {
          showToast(currentLang==='en' ? 'Could not determine city' : currentLang==='ru' ? 'Не удалось определить город' : 'Nie udało się ustalić miasta');
        }
      }, (err) => {
        if (myToken !== locGeoToken) return;
        if (box) box.classList.remove('loading');
        let msg = currentLang==='en' ? 'Location access denied' : currentLang==='ru' ? 'Доступ к геолокации запрещён' : 'Brak dostępu do lokalizacji';
        if (err && err.code === 1) {
          msg = currentLang==='en'
            ? 'Allow location in browser settings'
            : currentLang==='ru'
            ? 'Разрешите геолокацию в настройках браузера'
            : 'Zezwól na lokalizację w ustawieniach przeglądarki';
        }
        showToast(msg);
      }, { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 });
    }


    function selectLoc(cat, region, city, district) {
      // Cancel any in-flight geolocation apply
      locGeoToken = (locGeoToken || 0) + 1;
      locFilter[cat] = {
        region: region ? String(region) : null,
        city: city ? String(city) : null,
        district: district ? String(district) : null
      };
      // Avoid conflict with legacy realty city/country selects
      if (cat === 'realty') {
        const rc = document.getElementById('realty-city');
        const rco = document.getElementById('realty-country');
        if (rc) rc.value = '';
        if (rco) rco.value = '';
      }
      updateLocButtons(cat);
      closeLocPanel();
      requestAnimationFrame(() => updateLocButtons(cat));
      if (typeof renderCategory === 'function') renderCategory(cat);
    }
    window.selectLoc = selectLoc;
    window.toggleRoomChip = toggleRoomChip;
    window.openLocPanel = openLocPanel;
    window.useMyLocation = useMyLocation;
    window.drillLocRegion = drillLocRegion;
    window.drillLocCity = drillLocCity;
    window.renderLocPanel = renderLocPanel;
    window.normLoc = normLoc;
    window.resolveCityName = resolveCityName;
    window.resolveRegionName = resolveRegionName;

    function matchesLocation(ad, cat) {
      const st = locFilter[cat];
      if (!st || (!st.region && !st.city && !st.district)) return true;
      const city = ad.city || '';
      const region = ad.region || (typeof CITY_TO_REGION !== 'undefined' ? CITY_TO_REGION[city] : '') || '';
      const district = ad.district || '';
      const nCity = normLoc(city);
      const nRegion = normLoc(region);
      const nDistrict = normLoc(district);

      if (st.district) {
        const okCity = nCity === normLoc(st.city) || nCity.includes(normLoc(st.city)) || normLoc(st.city).includes(nCity);
        // If ad has no district yet — still allow same city (better UX for older ads)
        if (!district) return okCity;
        const okDist = nDistrict === normLoc(st.district) || nDistrict.includes(normLoc(st.district)) || normLoc(st.district).includes(nDistrict);
        return okCity && okDist;
      }
      if (st.city) {
        return nCity === normLoc(st.city) || nCity.includes(normLoc(st.city)) || normLoc(st.city).includes(nCity);
      }
      if (st.region) {
        if (nRegion === normLoc(st.region)) return true;
        if (typeof CITY_TO_REGION !== 'undefined' && CITY_TO_REGION[city] === st.region) return true;
        // fallback: any city from that voivodeship
        if (typeof POLAND_REGIONS !== 'undefined' && POLAND_REGIONS[st.region]) {
          return POLAND_REGIONS[st.region].some(c => normLoc(c) === nCity);
        }
        return false;
      }
      return true;
    }

    document.addEventListener('click', (e) => {
      if (e.target.closest('.loc-picker') || e.target.closest('.loc-panel')) return;
      closeLocPanel();
    });


    const COUNTRIES = [
      "Afganistan","Albania","Algieria","Andora","Angola","Antigua i Barbuda","Arabia Saudyjska","Argentyna","Armenia","Australia",
      "Austria","Azerbejdżan","Bahamy","Bahrajn","Bangladesz","Barbados","Belgia","Belize","Benin","Bhutan",
      "Białoruś","Birma (Myanmar)","Boliwia","Bośnia i Hercegowina","Botswana","Brazylia","Brunei","Bułgaria","Burkina Faso","Burundi",
      "Chile","Chiny","Chorwacja","Cypr","Czad","Czarnogóra","Czechy","Dania","Demokratyczna Republika Konga","Dominika",
      "Dominikana","Dżibuti","Egipt","Ekwador","Erytrea","Estonia","Eswatini","Etiopia","Fidżi","Filipiny",
      "Finlandia","Francja","Gabon","Gambia","Ghana","Grecja","Grenada","Gruzja","Gujana","Gwatemala",
      "Gwinea","Gwinea Bissau","Gwinea Równikowa","Haiti","Hiszpania","Holandia","Honduras","Indie","Indonezja","Irak",
      "Iran","Irlandia","Islandia","Izrael","Jamajka","Japonia","Jemen","Jordania","Kambodża","Kamerun",
      "Kanada","Katar","Kazachstan","Kenia","Kirgistan","Kiribati","Kolumbia","Komory","Kongo","Korea Południowa",
      "Korea Północna","Kostaryka","Kuba","Kuwejt","Laos","Lesotho","Liban","Liberia","Libia","Liechtenstein",
      "Litwa","Luksemburg","Łotwa","Macedonia Północna","Madagaskar","Malawi","Malediwy","Malezja","Mali","Malta",
      "Maroko","Mauritius","Mauretania","Meksyk","Mikronezja","Mołdawia","Monako","Mongolia","Mozambik","Namibia",
      "Nauru","Nepal","Niemcy","Niger","Nigeria","Nikaragua","Norwegia","Nowa Zelandia","Oman","Pakistan",
      "Palau","Panama","Papua-Nowa Gwinea","Paragwaj","Peru","Polska","Portugalia","Republika Południowej Afryki","Republika Środkowoafrykańska","Republika Zielonego Przylądka",
      "Rosja","Rumunia","Rwanda","Saint Kitts i Nevis","Saint Lucia","Saint Vincent i Grenadyny","Salwador","Samoa","San Marino","Senegal",
      "Serbia","Seszele","Sierra Leone","Singapur","Słowacja","Słowenia","Somalia","Sri Lanka","Stany Zjednoczone","Sudan",
      "Sudan Południowy","Surinam","Syria","Szwajcaria","Szwecja","Tadżykistan","Tajlandia","Tajwan","Tanzania","Timor Wschodni",
      "Togo","Tonga","Trynidad i Tobago","Tunezja","Turcja","Turkmenistan","Tuvalu","Uganda","Ukraina","Urugwaj",
      "Uzbekistan","Vanuatu","Watykan","Wenezuela","Węgry","Wielka Brytania","Wietnam","Włochy","Wybrzeże Kości Słoniowej","Wyspy Marshalla",
      "Wyspy Salomona","Wyspy Świętego Tomasza i Książęca","Zambia","Zimbabwe","Zjednoczone Emiraty Arabskie"
    ];

    let realtyLocFilter = 'all';

    function populatePolandCities(selectId, includeAll) {
      const sel = document.getElementById(selectId);
      if (!sel) return;
      const prev = sel.value;
      const allLabel = includeAll ? (typeof t === 'function' ? (t('filter_city') === 'Miasto' || t('filter_city') === 'City' || t('filter_city') === 'Город' ? (currentLang==='ru'?'Все':currentLang==='en'?'All':'Wszystkie') : 'Wszystkie') : 'Wszystkie') : '';
      let html = includeAll ? `<option value="">${currentLang==='en'?'All':currentLang==='ru'?'Все':'Wszystkie'}</option>` : `<option value="">${currentLang==='en'?'Choose...':currentLang==='ru'?'Выберите...':'Wybierz...'}</option>`;
      POLAND_CITIES.forEach(c => {
        if (c === 'Other') {
          html += `<option value="__other__">${typeof t==='function'?t('city_other'):'Inna miejscowość (wpisz)'}</option>`;
        } else {
          html += `<option value="${c}">${c}</option>`;
        }
      });
      sel.innerHTML = html;
      if (prev) sel.value = prev;
    }

    function populateCountries(selectId, includeAll, excludePoland) {
      const sel = document.getElementById(selectId);
      if (!sel) return;
      const prev = sel.value;
      let html = includeAll
        ? `<option value="">${currentLang==='en'?'All':currentLang==='ru'?'Все':'Wszystkie'}</option>`
        : `<option value="">${currentLang==='en'?'Choose country...':currentLang==='ru'?'Выберите страну...':'Wybierz kraj...'}</option>`;
      COUNTRIES.forEach(c => {
        if (excludePoland && c === 'Polska') return;
        html += `<option value="${c}">${c}</option>`;
      });
      sel.innerHTML = html;
      if (prev) sel.value = prev;
    }

  function onRealtyLocationTypeChange() {
  const cat = document.getElementById('f-category')?.value || 'realty';
  const pl = document.getElementById('realty-pl-fields');
  const ab = document.getElementById('realty-abroad-fields');

  const isAbroad = cat === 'realty_abroad';

  if (pl) pl.style.display = isAbroad ? 'none' : '';
  if (ab) ab.style.display = isAbroad ? 'flex' : 'none';

  const citySel = document.getElementById('f-city-realty');
  const countrySel = document.getElementById('f-country');
  const cityAb = document.getElementById('f-city-abroad');

  if (isAbroad) {
    if (citySel) citySel.required = false;
    if (countrySel) countrySel.required = true;
    if (cityAb) cityAb.required = true;
  } else {
    if (citySel) citySel.required = true;
    if (countrySel) countrySel.required = false;
    if (cityAb) cityAb.required = false;
  }
}

    
    function populateDistrictSelect(city, selectId, allowEmpty) {
      const sel = document.getElementById(selectId);
      if (!sel) return;
      const districts = (typeof CITY_DISTRICTS !== 'undefined' && CITY_DISTRICTS[city]) ? CITY_DISTRICTS[city] : [];
      const prev = sel.value;
      let html = `<option value="">${currentLang==='en'?'District (optional)':currentLang==='ru'?'Район (необяз.)':'Dzielnica (opcjonalnie)'}</option>`;
      districts.forEach(d => { html += `<option value="${d}">${d}</option>`; });
      if (!districts.length) {
        html += `<option value="__other__">${currentLang==='en'?'Other / type below':currentLang==='ru'?'Другой':('Inna / wpisz')}</option>`;
      }
      sel.innerHTML = html;
      if (prev) sel.value = prev;
      sel.style.display = districts.length ? '' : (allowEmpty ? '' : '');
    }

    function onRealtyCityChange() {
      const sel = document.getElementById('f-city-realty');
      const other = document.getElementById('f-city-realty-other');
      if (!sel || !other) return;
      if (sel.value === '__other__') {
        other.style.display = '';
        other.required = true;
      } else {
        other.style.display = 'none';
        other.required = false;
        other.value = '';
      }
      const city = sel.value === '__other__' ? '' : sel.value;
      // District select for realty
      let distSel = document.getElementById('f-district-select');
      const distInput = document.getElementById('f-district');
      if (city && typeof CITY_DISTRICTS !== 'undefined' && CITY_DISTRICTS[city]) {
        if (!distSel && distInput) {
          distSel = document.createElement('select');
          distSel.id = 'f-district-select';
          distSel.style.cssText = 'width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:9px;font-size:0.95rem;margin-bottom:8px';
          distSel.onchange = function() {
            if (this.value && this.value !== '__other__') {
              distInput.value = this.value;
              distInput.style.display = 'none';
            } else {
              distInput.value = '';
              distInput.style.display = '';
            }
          };
          distInput.parentNode.insertBefore(distSel, distInput);
        }
        if (distSel) {
          distSel.style.display = '';
          populateDistrictSelect(city, 'f-district-select', true);
          distInput.style.display = 'none';
          distInput.placeholder = 'Dzielnica';
        }
      } else {
        if (distSel) distSel.style.display = 'none';
        if (distInput) {
          distInput.style.display = '';
          distInput.placeholder = 'np. Mokotów';
        }
      }
      if (typeof generateRealtyTitle === 'function') generateRealtyTitle();
    }

    function onRealtyCountryChange() {
      if (typeof generateRealtyTitle === 'function') generateRealtyTitle();
    }

    function setRealtyLoc(loc) {
      realtyLocFilter = loc;
      document.querySelectorAll('#realty-loc-tabs .deal-tab').forEach(b => {
        b.classList.toggle('active', b.dataset.loc === loc);
      });
      renderCategory('realty');
    }

    function getRealtyCityValue() {
      const type = document.getElementById('f-location-type')?.value || 'pl';
      if (type === 'abroad') {
        return (document.getElementById('f-city-abroad')?.value || '').trim();
      }
      const sel = document.getElementById('f-city-realty');
      if (!sel) return '';
      if (sel.value === '__other__') {
        return (document.getElementById('f-city-realty-other')?.value || '').trim();
      }
      return sel.value;
    }


    // ========== MODERATION POLLING ==========
const MODERATION_POLL_MS = 15_000;

let __moderationPollTimer = null;
let __moderationFirstRun = true;
window.__moderationPendingCount = window.__moderationPendingCount || 0;

function moderationBadgeHTML() {
  const n = window.__moderationPendingCount || 0;
  if (!n) return '';
  return ` <span class="mod-badge-count">${n}</span>`;
}

function refreshModerationBadges() {
  const n = window.__moderationPendingCount || 0;
  document.querySelectorAll('.mod-badge-count').forEach(el => {
    if (n) {
      el.textContent = String(n);
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });
}

async function pollModerationPending() {
  if (!isModerator()) {
    window.__moderationPendingCount = 0;
    if (__moderationPollTimer) {
      clearInterval(__moderationPollTimer);
      __moderationPollTimer = null;
    }
    refreshModerationBadges();
    return;
  }

  try {
    const data = await API.request('/api/moderation/pending-count', { method: 'GET' });
    const count = Number(data && data.count) || 0;
    const prev = window.__moderationPendingCount || 0;

    window.__moderationPendingCount = count;

    if (__moderationFirstRun) {
      __moderationFirstRun = false;
    } else if (count > prev) {
      const diff = count - prev;
      showToast(
        currentLang === 'ru'
          ? `Новое на модерации: ${diff}`
          : currentLang === 'en'
            ? `${diff} new listing${diff > 1 ? 's' : ''} awaiting moderation`
            : `${diff} nowe ogłoszenie${diff > 1 ? 'a' : ''} do moderacji`
      );
      document.body.classList.add('has-new-moderation');
      setTimeout(() => document.body.classList.remove('has-new-moderation'), 2000);
    }

    refreshModerationBadges();
  } catch (e) {
    // тихо игнорируем — offline / 401 / 403
  }
}

function startModerationPolling() {
  if (__moderationPollTimer) return;
  if (!isModerator()) return;
  __moderationFirstRun = true;
  pollModerationPending();
  __moderationPollTimer = setInterval(pollModerationPending, MODERATION_POLL_MS);
}

function stopModerationPolling() {
  if (__moderationPollTimer) {
    clearInterval(__moderationPollTimer);
    __moderationPollTimer = null;
  }
  window.__moderationPendingCount = 0;
  __moderationFirstRun = true;
  refreshModerationBadges();
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (__moderationPollTimer) {
      clearInterval(__moderationPollTimer);
      __moderationPollTimer = null;
    }
  } else if (isModerator()) {
    startModerationPolling();
  }
});
// ========== /MODERATION POLLING ==========

// ========== AUTH ==========
    let currentUser = null;
    let authMode = 'register';
    let userType = 'private';
    let pendingAdd = false;

    function loadUser() {
      try { authToken = localStorage.getItem('handlio_token') || null; } catch (e) { authToken = null; }
      const rawUser = STORAGE.json('handlio_user', null);
      if (!authToken || !rawUser || typeof rawUser.id !== 'string' || typeof rawUser.email !== 'string') {
        currentUser = null;
        if (!authToken) STORAGE.remove('handlio_user');
      } else {
        const safe = Object.assign({}, rawUser);
        delete safe.password;
        delete safe.password_hash;
        currentUser = Object.assign(safe, { role: normalizeRole(rawUser.role) });
      }
      favorites = getCurrentUserId() ? safeArray(STORAGE.json('handlio_favs_' + getCurrentUserId(), [])) : [];
      renderAuthNav();
      if (isModerator()) startModerationPolling(); else stopModerationPolling();
const __activePage = document.querySelector('.page.active');
if (__activePage && __activePage.id === 'page-my') renderMy();
  if (authToken) {
    API.me()
      .then(function(data) {
        if (data && data.user) {
          const newId = String(data.user.id);
          const oldId = currentUser ? String(currentUser.id) : null;
          currentUser = Object.assign({}, data.user, { role: normalizeRole(data.user.role) });
          STORAGE.jsonSet('handlio_user', currentUser);

         
          if (newId !== oldId || !oldId) {
            favorites = safeArray(STORAGE.json('handlio_favs_' + newId, []));
            saveFavs(); // на случай, если надо создать пустой массив под новый id
          }

          renderAuthNav();
          if (isModerator()) startModerationPolling(); else stopModerationPolling();

    
          const __page = document.querySelector('.page.active');
          if (__page) {
            const pid = __page.id.replace('page-', '');
            if (pid === 'fav') renderFav();
            else if (pid === 'my') renderMy();
          }
        }
      })
      .catch(function() {
        setAuthToken(null, null);
        currentUser = null;
        favorites = [];
        STORAGE.remove('handlio_user');
        renderAuthNav();
        stopModerationPolling();
      });
  }
    }

    function saveUser(user, token, refresh) {
            if (user) {
        const safe = Object.assign({}, user);
        delete safe.password;
        delete safe.password_hash;
        currentUser = Object.assign(safe, { role: normalizeRole(safe.role) });
        STORAGE.jsonSet('handlio_user', currentUser);
      } else {
        currentUser = null;
        STORAGE.remove('handlio_user');
      }
      if (arguments.length > 1) setAuthToken(token, refresh !== undefined ? refresh : null);
      if (!user) setAuthToken(null, null);
      renderAuthNav();
    }

    function renderAuthNav() {
      const el = document.getElementById('auth-nav');
      if (!el) return;
      document.body.classList.toggle('logged-in', !!currentUser);
      if (currentUser) {
        const label = currentUser.type === 'business'
          ? (currentUser.company || currentUser.email)
          : (currentUser.name || currentUser.email);
        const __modBadge = moderationBadgeHTML();
      const adminBtn = isModerator()
        ? `<button class="btn btn-primary btn-sm" data-action="nav" data-page="admin">${t('nav_admin') || 'Admin'}${__modBadge}</button>`
        : '';
      const adminItem = isModerator()
        ? `<button type="button" data-action="nav" data-page="admin"><span>🛠</span><span>${t('nav_admin') || 'Admin'}</span>${__modBadge}</button>`
        : '';
        el.innerHTML = `${adminBtn}
          <div class="auth-user-wrap">
            <span class="auth-user" title="${escapeHtml(label)}" tabindex="0">
              ${escapeHtml(label)}
              <span class="chev">▼</span>
            </span>
            <div class="user-menu" role="menu">
  <button type="button" data-action="nav" data-page="fav"><span>❤️</span><span>${t('nav_fav') || 'Ulubione'}</span></button>
  <button type="button" data-action="nav" data-page="my"><span>📋</span><span>${t('nav_my') || 'Moje'}</span></button>
        <button type="button" data-action="nav" data-page="messages"><span>💬</span><span>${t('nav_chat') || 'Chat'}</span><span class="h23-badge" data-badge="chat" hidden>0</span></button>
      <button type="button" data-action="nav" data-page="notifications"><span>🔔</span><span>${t('nav_notifications') || 'Powiadomienia'}</span><span class="h23-badge" data-badge="notify" hidden>0</span></button>
    <button type="button" data-action="nav" data-page="seller"><span>👤</span><span>${t('nav_seller') || 'Kabinet'}</span></button>
  <button type="button" data-action="change-password"><span>🔑</span><span>${t('pwd_change_title') || 'Zmiana hasła'}</span></button>
  ${adminItem}
  ${isModerator() ? `<button type="button" data-action="nav" data-page="reports"><span>🚨</span><span>${t('nav_reports')}</span></button>` : ''}
  <div class="menu-divider"></div>
  <button type="button" class="menu-logout" data-action="logout"><span>↩</span><span>${t('btn_logout') || 'Wyloguj'}</span></button>
</div>
          </div>`;
      } else {
        el.innerHTML = `<button class="btn btn-primary btn-sm" data-action="auth-register">${t('btn_register')}</button>
          <button class="btn btn-outline btn-sm" style="border-color:rgba(255,255,255,0.4);color:white" data-action="auth-login">${t('btn_login')}</button>`;
      }
    }

    async function logout() {
      try {
        if (typeof refreshToken !== 'undefined' && refreshToken) {
          await fetch(API_URL + '/api/auth/logout', {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify({ refreshToken })
          });
        }
      } catch (e) { /* ignore */ }
      if (typeof setAuthToken === 'function') setAuthToken(null, null);
      saveUser(null, null, null);
      if (typeof stopModerationPolling === 'function') stopModerationPolling();
      pendingAdd = false;
      showToast(t('toast_logout'));
      showPage('home');
    }

    function goAdd() {
      if (currentUser) {
        showPage('add');
      } else {
        pendingAdd = true;
        setAuthMode('register');
        showPage('auth');
      }
    }

    function setUserType(type) {
  userType = type;
  const tabPrivate = document.getElementById('tab-private');
  const tabBusiness = document.getElementById('tab-business');
  const regPrivate = document.getElementById('reg-private');
  const regBusiness = document.getElementById('reg-business');

  if (tabPrivate) tabPrivate.classList.toggle('active', type === 'private');
  if (tabBusiness) tabBusiness.classList.toggle('active', type === 'business');

  if (authMode === 'login') {
    if (regPrivate) regPrivate.style.display = 'none';
    if (regBusiness) regBusiness.style.display = 'none';
  } else {
    if (regPrivate) regPrivate.style.display = type === 'private' ? 'block' : 'none';
    if (regBusiness) regBusiness.style.display = type === 'business' ? 'block' : 'none';
  }
}

    function setAuthMode(mode) {
      authMode = mode;
      const title = document.querySelector('#page-auth h1');
      const subtitle = document.querySelector('#page-auth .subtitle');
      const note = document.getElementById('auth-note');
      const btn = document.getElementById('auth-submit-btn');
      const switchText = document.getElementById('auth-switch-text');
      const switchLink = document.getElementById('auth-switch-link');
      const typeTabs = document.querySelector('.user-type-tabs');

  const regPhone = document.getElementById('reg-phone');

  if (mode === 'login') {
    if (title) title.textContent = t('auth_title_login');
    if (subtitle) subtitle.textContent = t('auth_subtitle_login');
    if (note) note.style.display = pendingAdd ? 'block' : 'none';
    if (btn) btn.textContent = t('btn_login');
    if (switchText) switchText.textContent = t('no_account');
    if (switchLink) switchLink.textContent = t('btn_register_link');
    if (typeTabs) typeTabs.style.display = 'none';
    const fp = document.getElementById('forgot-password-link'); if (fp) fp.style.display = '';
    document.getElementById('reg-private').style.display = 'none';
    document.getElementById('reg-business').style.display = 'none';
    if (regPhone) regPhone.style.display = 'none';
    const phoneInput = document.getElementById('a-phone');
    if (phoneInput) phoneInput.required = false;
  } else {
    if (title) title.textContent = t('auth_title');
    if (subtitle) subtitle.textContent = t('auth_subtitle');
    if (note) note.style.display = pendingAdd ? 'block' : 'none';
    if (btn) btn.textContent = t('btn_register');
    if (switchText) switchText.textContent = t('have_account');
    if (switchLink) switchLink.textContent = t('btn_login_link');
    if (typeTabs) typeTabs.style.display = 'flex';
    const fp = document.getElementById('forgot-password-link'); if (fp) fp.style.display = 'none';
    if (regPhone) regPhone.style.display = '';
    const phoneInput = document.getElementById('a-phone');
    if (phoneInput) phoneInput.required = true;
    setUserType(userType);
  }
    }

    function toggleAuthMode() {
      setAuthMode(authMode === 'register' ? 'login' : 'register');
    }

    async function submitAuth(e) {
      e.preventDefault();
      const email = document.getElementById('a-email').value.trim().toLowerCase();
      const phone = document.getElementById('a-phone').value.trim();
      const password = document.getElementById('a-password').value;

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast(t('toast_fill_required')); return;
      }
      if (authMode === 'register' && password.length < 6) {
        showToast(t('pwd_too_short') || 'Hasło musi mieć co najmniej 6 znaków'); return;
      }

      if (authMode === 'login') {
        try {
          let data;
          try {
            data = await API.login(email, password);
          } catch (e) {
            showToast((e.data && e.data.error) || e.message || t('toast_login_fail'));
            return;
          }
          saveUser(data.user, data.token || data.accessToken, data.refreshToken);
          showToast(t('toast_login_ok'));
          document.getElementById('auth-form').reset();
          if (pendingAdd) { pendingAdd = false; showPage('add'); }
          else showPage('home');
        } catch (err) {
          console.error(err);
          showToast(t('toast_login_fail') || 'Błąd logowania');
        }
        return;
      }

      const payload = {
        email,
        password,
        phone,
        type: userType
      };
      if (userType === 'private') {
        payload.name = document.getElementById('a-name').value.trim();
        if (!payload.name) { showToast(t('toast_fill_required')); return; }
      } else {
        payload.company = document.getElementById('a-company').value.trim();
        payload.nip = document.getElementById('a-nip').value.trim();
        payload.contact = document.getElementById('a-contact').value.trim();
        if (!payload.company || !payload.nip || !payload.contact) {
          showToast(t('toast_fill_required'));
          return;
        }
      }

      try {
        let data;
        try {
          data = await API.register(payload);
        } catch (e) {
          showToast((e.data && e.data.error) || e.message || t('toast_email_exists'));
          return;
        }
        saveUser(data.user, data.token || data.accessToken, data.refreshToken);
        showToast(t('toast_register_ok'));
        document.getElementById('auth-form').reset();
        if (pendingAdd) { pendingAdd = false; showPage('add'); }
        else showPage('home');
      } catch (err) {
        console.error(err);
        showToast('Błąd rejestracji');
      }
    }


    // ========== PASSWORD CHANGE & RECOVERY ==========

    function shareAd(id) {
      const ad = ads.find(a => a.id === id);
      if (!ad) return;
      const text = ad.title + ' — ' + formatPrice(ad.price) + (ad.city ? ' · ' + ad.city : '');
      const url = location.href.split('#')[0] + '#ad=' + id;
      if (navigator.share) {
        navigator.share({ title: ad.title, text, url }).catch(() => {});
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text + '\n' + url).then(() => showToast(t('toast_link_copied') || 'Link skopiowany')).catch(() => showToast(url));
      } else {
        prompt(t('btn_share') || 'Share', url);
      }
    }
    window.shareAd = shareAd;

    function togglePasswordVisibility(inputId, btn) {
      const inp = document.getElementById(inputId);
      if (!inp) return;
      const show = inp.type === 'password';
      inp.type = show ? 'text' : 'password';
      if (btn) btn.textContent = show ? '🙈' : '👁';
    }
    window.togglePasswordVisibility = togglePasswordVisibility;

    function toggleTheme() {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next === 'dark' ? 'dark' : '');
      STORAGE.set('handlio_theme', next);
      const btn = document.getElementById('theme-btn');
      if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
    }
    window.toggleTheme = toggleTheme;

    (function initTheme() {
      const saved = STORAGE.get('handlio_theme');
      if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        const btn = document.getElementById('theme-btn');
        if (btn) btn.textContent = '☀️';
      }
    })();



    function openAdFromHash() {
      const m = location.hash.match(/ad=([\w-]+)/);
      if (m) openAd(m[1]);
    }
    window.addEventListener('load', () => {
      setTimeout(openAdFromHash, 300);
    });
    window.addEventListener('hashchange', openAdFromHash);

    function closeModalById(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('open');
      if (id === 'modal-forgot-password') STORAGE.remove('handlio_reset');
      if (id === 'pay-modal') pendingAd = null;
    }

    function openModalById(id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('open');
    }

    function openChangePassword() {
      if (!currentUser) {
        showPage('auth');
        setAuthMode('login');
        return;
      }
      document.getElementById('pwd-current').value = '';
      document.getElementById('pwd-new').value = '';
      document.getElementById('pwd-confirm').value = '';
      openModalById('modal-change-password');
    }

    function updateUserPassword(email, newPassword) {
      // шаг 15: пароли только на сервере
      return false;
    }

    async function submitChangePassword(e) {
      e.preventDefault();
      if (!currentUser) return;
      const cur = document.getElementById('pwd-current').value;
      const neu = document.getElementById('pwd-new').value;
      const conf = document.getElementById('pwd-confirm').value;
      if (neu.length < 6) {
        showToast(t('pwd_too_short') || 'Hasło min. 6 znaków');
        return;
      }
      if (neu !== conf) {
        showToast(t('pwd_mismatch') || 'Hasła nie są takie same');
        return;
      }
      try {
        await API.changePassword(cur, neu);
        closeModalById('modal-change-password');
        showToast(t('pwd_changed') || 'Hasło zmienione');
      } catch (err) {
        showToast((err.data && err.data.error) || err.message || t('pwd_wrong_current'));
      }
    }

    function openForgotPassword() {
      document.getElementById('forgot-step-email').style.display = '';
      document.getElementById('forgot-step-reset').style.display = 'none';
      document.getElementById('forgot-email').value = document.getElementById('a-email')?.value || '';
      document.getElementById('forgot-code').value = '';
      document.getElementById('forgot-new').value = '';
      document.getElementById('forgot-confirm').value = '';
      try { sessionStorage.removeItem('handlio_reset_email'); } catch (e) {}
      openModalById('modal-forgot-password');
    }

    async function sendResetCode() {
      const email = (document.getElementById('forgot-email').value || '').trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast(t('toast_fill_required'));
        return;
      }
      try {
        const data = await API.forgotPassword(email);
        try { sessionStorage.setItem('handlio_reset_email', email); } catch (e) {}
        document.getElementById('forgot-step-email').style.display = 'none';
        document.getElementById('forgot-step-reset').style.display = '';
        const msg = document.getElementById('forgot-sent-msg');
        if (data && data.demo && data.code) {
          msg.innerHTML = (t('pwd_sent_demo') ||
            'Kod (tryb demo — w produkcji tylko e-mail):') +
            ' <strong style="letter-spacing:2px;font-size:1.1rem">' + escapeHtml(data.code) + '</strong>';
        } else {
          msg.textContent = t('pwd_sent_generic') ||
            'Jeśli konto istnieje, kod został wysłany na e-mail. Sprawdź skrzynkę.';
        }
        showToast(t('pwd_code_sent') || 'Kod resetujący wygenerowany');
      } catch (err) {
        showToast((err.data && err.data.error) || err.message || 'Błąd');
      }
    }

    async function submitResetPassword() {
      const code = (document.getElementById('forgot-code').value || '').trim();
      const neu = document.getElementById('forgot-new').value;
      const conf = document.getElementById('forgot-confirm').value;
      let email = '';
      try { email = sessionStorage.getItem('handlio_reset_email') || ''; } catch (e) {}
      if (!email) email = (document.getElementById('forgot-email').value || '').trim().toLowerCase();
      if (neu.length < 6) {
        showToast(t('pwd_too_short') || 'Hasło min. 6 znaków');
        return;
      }
      if (neu !== conf) {
        showToast(t('pwd_mismatch') || 'Hasła nie są takie same');
        return;
      }
      try {
        await API.resetPassword(email, code, neu);
        try { sessionStorage.removeItem('handlio_reset_email'); } catch (e) {}
        closeModalById('modal-forgot-password');
        showToast(t('pwd_reset_ok') || 'Hasło zresetowane — możesz się zalogować');
        setAuthMode('login');
        const emailInput = document.getElementById('a-email');
        if (emailInput) emailInput.value = email;
      } catch (err) {
        showToast((err.data && err.data.error) || err.message || t('pwd_code_wrong'));
      }
    }

    window.openChangePassword = openChangePassword;
    window.openForgotPassword = openForgotPassword;
    window.sendResetCode = sendResetCode;
    window.submitResetPassword = submitResetPassword;
    window.submitChangePassword = submitChangePassword;
    window.applyPromoPreview = applyPromoPreview;
    window.closeModalById = closeModalById;
    window.closeModal = closeModal;


    // ========== ADMIN ==========
    // Шаг 3: пароль админа НЕ хранится на фронте.
    // Аккаунт создаётся на сервере: node init-db.js (PostgreSQL + bcrypt).
    const SUPER_ADMIN_EMAIL = 'admin@handlio.pl';

    let adminFilter = 'pending';

    function seedAdmin() {
      // no-op: admin только в БД (init-db.js)
    }

    function isAdmin() {
      return isAdminRole();
    }
    function isModerator() {
      return isModeratorRole();
    }

    function setAdminFilter(f) {
      adminFilter = f;
      document.querySelectorAll('#admin-filters .deal-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === f);
      });
      renderAdmin();
    }

    function renderAdmin() {
      if (!isModerator()) {
        showPage('home');
        showToast(t('toast_admin_only'));
        return;
      }
      const pending = ads.filter(a => (a.status || 'approved') === 'pending').length;
      const approved = ads.filter(a => (a.status || 'approved') === 'approved').length;
      const rejected = ads.filter(a => a.status === 'rejected').length;
      document.getElementById('admin-stats').innerHTML = `
        <div class="admin-stat"><div class="n">${pending}</div><div class="l">${t('mod_pending')}</div></div>
        <div class="admin-stat"><div class="n">${approved}</div><div class="l">${t('mod_approved')}</div></div>
        <div class="admin-stat"><div class="n">${rejected}</div><div class="l">${t('mod_rejected')}</div></div>
        <div class="admin-stat"><div class="n">${ads.length}</div><div class="l">${t('mod_all')}</div></div>
      `;

      let list = [...ads];
      if (adminFilter !== 'all') {
        list = list.filter(a => (a.status || 'approved') === adminFilter);
      }
      list.sort((a, b) => b.created - a.created);

      const grid = document.getElementById('admin-ads');
      if (list.length === 0) {
        grid.innerHTML = `<div class="empty"><div class="empty-icon">✅</div><p>${t('empty_mod')}</p></div>`;
        return;
      }
      grid.innerHTML = list.map(ad => {
        const status = ad.status || 'approved';
        const statusLabel = status === 'pending' ? t('mod_pending') : status === 'rejected' ? t('mod_rejected') : t('mod_approved');
        const statusClass = status === 'pending' ? 'mod-pending' : status === 'rejected' ? 'mod-rejected' : 'mod-approved';
        const imgs = getAdImages(ad);
        const thumb = imgs[0]
          ? `<img src="${escapeHtml(imgs[0])}" alt="" style="width:100%;height:100%;object-fit:cover">`
          : CATEGORIES[ad.category]?.icon || '📦';
        return `
          <div class="ad-card" style="cursor:default">
            <div class="ad-image cat-${ad.category}" data-action="open-ad" data-id="${escapeAttr(ad.id)}" style="cursor:pointer">${thumb}</div>
            <div class="ad-body">
              <span class="mod-badge ${statusClass}">${statusLabel}</span>
              <div class="ad-price">${formatPrice(ad.price)}</div>
              <div class="ad-title">${escapeHtml(ad.title)}</div>
              <div class="ad-meta">📍 ${escapeHtml(ad.city)} · ${formatDate(ad.created)}</div>
              <div class="ad-actions-bar">
                ${status !== 'approved' ? `<button class="btn btn-primary btn-sm" data-action="moderate" data-id="${escapeAttr(ad.id)}" data-status="approved">${t('btn_approve')}</button>` : ''}
                ${status !== 'rejected' ? `<button class="btn btn-outline btn-sm" data-action="moderate" data-id="${escapeAttr(ad.id)}" data-status="rejected">${t('btn_reject')}</button>` : ''}
                <button class="btn btn-danger btn-sm" data-action="delete-ad" data-id="${escapeAttr(ad.id)}">${t('btn_delete')}</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

async function moderateAd(id, status) {
  const ad = ads.find(a => a.id === id);
  if (!ad || !isModerator()) return;
  if (!['approved', 'rejected', 'pending'].includes(status)) return;

  try {
    const updatedAd = await API.updateAd(id, {
      status: status,
      moderatedAt: Date.now(),
      moderatedBy: currentUser.email
    });

    // Обновляем объявление в памяти
    Object.assign(ad, {
      status: updatedAd.status,
      moderatedAt: updatedAd.moderatedAt != null ? updatedAd.moderatedAt : updatedAd.moderated_at,
      moderatedBy: updatedAd.moderatedBy != null ? updatedAd.moderatedBy : updatedAd.moderated_by
    });

    showToast(
      status === 'approved'
        ? t('toast_approved')
        : t('toast_rejected')
    );

    renderAdmin();
    renderHome();
    if (typeof pollModerationPending === 'function') pollModerationPending();


  } catch (error) {
    console.error('[moderateAd]', error);
    showToast('Ошибка сохранения');
  }
}

    // ========== PRICING ACTIONS ==========
    async function extendAd() {
      if (!currentUser) {
        goAdd();
        return;
      }
      const myAds = ads.filter(a => a.userId === currentUser.id);
      if (myAds.length === 0) {
        showToast('Nie masz aktywnych ogłoszeń do przedłużenia.');
        return;
      }

      async function payExtend(ad) {
        let data;
        try {
          data = await API.payDemo({
            adId: ad.id,
            plan: (currentUser && currentUser.type === 'business') ? 'business' : 'extend',
            payMethod: 'demo'
          });
        } catch (e) {
          showToast((e && e.message) || 'Błąd przedłużenia');
          return false;
        }
        if (data && data.ad) {
          Object.assign(ad, data.ad);
          return true;
        }
        showToast('Błąd przedłużenia');
        return false;
      }

      if (myAds.length === 1) {
        if (!(await payExtend(myAds[0]))) return;
        showToast('Przedłużono o 15 dni!');
        renderMy();
        return;
      }
      const selection = myAds.map((a, i) => `${i + 1}. ${a.title} (${formatPrice(a.price)})`).join('\n');
      const choice = prompt(`Wybierz ogłoszenie do przedłużenia (wpisz numer):\n${selection}`);
      if (!choice) return;
      const idx = parseInt(choice, 10) - 1;
      if (idx < 0 || idx >= myAds.length) {
        showToast('Nieprawidłowy numer.');
        return;
      }
      if (!(await payExtend(myAds[idx]))) return;
      showToast('Przedłużono o 15 dni!');
      renderMy();
    }

        async function boostMyAd() {
      if (!currentUser) { goAdd(); return; }
      const myAds = ads.filter(a => a.userId === currentUser.id);
      if (myAds.length === 0) {
        showToast('Nie masz aktywnych ogłoszeń do podbicia.');
        return;
      }

        async function payAndBoost(ad) {
    try {
      const payData = await API.payDemo({ adId: ad.id, plan: 'boost', payMethod: 'demo' });
      if (payData && payData.ad) {
     
        Object.assign(ad, payData.ad);
      } else {

        ad.boostedUntil = Date.now() + 24 * 60 * 60 * 1000;
        ad.boostedAt = Date.now();
      }
    } catch (e) {
      showToast((e && e.message) || 'Błąd płatności');
      return false;
    }
    return true;
  }

      if (myAds.length === 1) {
        const ad = myAds[0];
        if (!(await payAndBoost(ad))) return;
        showToast('Podbito na 24h!');
        renderMy();
        return;
      }
      const selection = myAds.map((a, i) => `${i + 1}. ${a.title} (${formatPrice(a.price)})`).join('\n');
      const choice = prompt(`Wybierz ogłoszenie do podbicia (wpisz numer):\n${selection}`);
      if (choice) {
        const idx = parseInt(choice, 10) - 1;
        if (idx >= 0 && idx < myAds.length) {
          const ad = myAds[idx];
          if (!(await payAndBoost(ad))) return;
          showToast('Podbito na 24h!');
          renderMy();
        } else {
          showToast('Nieprawidłowy numer.');
        }
      }
    }

    // ========== BANNER ROTATOR ==========
    const bannerCreatives = [
      {
        type: 'generic',
        html: `
          <div class="banner-label">Reklama</div>
          <div class="banner-placeholder">Miejsce<br>na reklamę</div>
        `
      },
      {
        type: 'self',
        html: `
          <div class="banner-label">Reklama</div>
          <div class="banner-logo">Hand<span>lio</span></div>
          <div class="banner-tagline">Tanie ogłoszenia dla wszystkich</div>
          <div class="banner-cta">Dodaj ogłoszenie</div>
        `,
        clickable: true
      }
    ];

    let bannerIndexLeft = 0;
    let bannerIndexRight = 1;

    function renderBanner(el, index) {
      if (!el) return;
      const creative = bannerCreatives[index % bannerCreatives.length];
      el.classList.add('fade-out');
      setTimeout(() => {
        el.className = 'banner-box ' + (creative.type === 'self' ? 'banner-self' : 'banner-generic');
        el.innerHTML = creative.html;
        el.style.opacity = '1';
        if (creative.clickable) {
          el.style.cursor = 'pointer';
          el.onclick = function() { goAdd(); };
        } else {
          el.style.cursor = 'default';
          el.onclick = null;
        }
        requestAnimationFrame(() => {
          el.classList.remove('fade-out');
          el.style.opacity = '1';
        });
      }, 280);
    }

    function rotateBanners() {
      bannerIndexLeft = (bannerIndexLeft + 1) % bannerCreatives.length;
      bannerIndexRight = (bannerIndexRight + 1) % bannerCreatives.length;
      if (bannerIndexLeft === bannerIndexRight) {
        bannerIndexRight = (bannerIndexRight + 1) % bannerCreatives.length;
      }
      const left = document.getElementById('banner-left');
      const right = document.getElementById('banner-right');
      if (left) renderBanner(left, bannerIndexLeft);
      if (right) renderBanner(right, bannerIndexRight);
    }

    // Global hardening: predictable modal lifecycle and keyboard handling.
    document.addEventListener('keydown', function(e) {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      galleryAdId = null;
      galleryIndex = 0;
    });

    window.addEventListener('storage', function(e) {
      if (!e.key) return;
      if (e.key === 'handlio_ads') {
        ads = safeArray(STORAGE.json('handlio_ads', []));
        renderHome();
        const active = document.querySelector('.page.active')?.id?.replace('page-','');
        if (['auto','moto','realty','abroad'].includes(active)) renderCategory(active);
        if (active === 'my') renderMy();
      }
      if (e.key === 'handlio_user') loadUser();
    });

    // ========== INIT ==========
    seedAdmin();
    (async () => {
      await loadAds();
      seedIfEmpty();
      (function normalizeAdRegions() {
        if (!Array.isArray(ads)) return;
        let changed = false;
        ads.forEach(a => {
          if (a.city && typeof resolveCityName === 'function') {
            const canonical = resolveCityName(a.city);
            if (canonical && canonical !== a.city) {
              a.city = canonical;
              changed = true;
            }
          }
          if (!a.region && a.city && typeof CITY_TO_REGION !== 'undefined' && CITY_TO_REGION[a.city]) {
            a.region = CITY_TO_REGION[a.city];
            changed = true;
          }
        });
        // saveAds no-op on server mode — region normalize stays client-side only until PUT exists
      })();
      loadUser();
      setLang(currentLang);
      renderHome();
    })();
    
    setupQuickFilters('auto');
    setupQuickFilters('moto');
    setupQuickFilters('realty');
    
    document.querySelectorAll('.banner-self').forEach(el => {
      el.style.cursor = 'pointer';
      el.onclick = function() { goAdd(); };
    });

    setTimeout(() => {
      renderBrandList('auto');
      renderBrandList('moto');
    }, 500);

    populatePolandCities('f-city-realty', false);
    populatePolandCities('realty-city', true);
    populateCountries('f-country', false, true);
    populateCountries('realty-country', true, false);
    populateCountries('abroad-country', true, false);
    onRealtyLocationTypeChange();

    ['auto','moto','realty'].forEach(c => { try { updateLocButtons(c); } catch(e) {} });
    setInterval(rotateBanners, 10000);
    
    populateAutoBrands();
    populateMotoBrands();

/* --- H23 / messaging (server-backed) --- */

const H23 = {
  // кэш публичных профилей (id → {id, type, name, company})
  _usersCache: new Map(),
  _usersLoaded: new Set(),

  uid() { return getCurrentUserId(); },
  now() { return Date.now(); },

  name(u) {
    if (!u) return 'Użytkownik';
    if (u.type === 'business') return u.company || u.email || 'Firma';
    return u.name || u.email || 'Użytkownik';
  },

  /** Загрузить публичные профили по id и закэшировать */
  async loadUsers(ids) {
    const need = (ids || [])
      .filter(Boolean)
      .map(String)
      .filter(id => !this._usersLoaded.has(id));
    if (!need.length) return;
    try {
      const list = await API.getUsersPublic(need);
      (list || []).forEach(u => {
        this._usersCache.set(String(u.id), u);
        this._usersLoaded.add(String(u.id));
      });
      // Если сервер не вернул — считаем, что такого юзера нет
      need.forEach(id => this._usersLoaded.add(String(id)));
    } catch (e) {
      console.warn('[H23.loadUsers]', e);
    }
  },

  getUser(id) {
    return this._usersCache.get(String(id)) || null;
  }
};

function h23Req() {
  if (!currentUser) {
    showPage('auth');
    setAuthMode('login');
    showToast('Zaloguj się, aby skorzystać z tej funkcji.');
    return false;
  }
  return true;
}

async function h23RefreshBadges() {
  if (!currentUser) {
    h23BadgesRender(0, 0);
    return;
  }
  try {
    const [msgs, notifs] = await Promise.all([
      API.getMessages(),
      API.getNotifications()
    ]);
    const uid = H23.uid();
    const unreadMsgs = (msgs || []).filter(m => m.to === uid && !m.read).length;
    const unreadNotifs = (notifs || []).filter(n => !n.read).length;

    // закэшировать профили всех участников
    const ids = new Set();
    (msgs || []).forEach(m => { ids.add(m.from); ids.add(m.to); });
    await H23.loadUsers([...ids]);

    h23BadgesRender(unreadMsgs, unreadNotifs);
  } catch (e) {
    // тихо
  }
}

function h23BadgesRender(chatCount, notifCount) {
  const apply = (badgeName, value) => {
    // находим ВСЕ элементы с нужным data-badge (в nav и в user-menu)
    document.querySelectorAll(`.h23-badge[data-badge="${badgeName}"]`).forEach(el => {
      el.textContent = value;
      el.hidden = !value; // если 0 — скрываем, если >0 — показываем
    });
  };
  apply('chat', chatCount);
  apply('notify', notifCount);
}

// обратная совместимость — где-то вызывается синхронно
function h23Badges() { h23RefreshBadges(); }

/* ---------- chat ---------- */

async function h23StartChat(adId) {
  if (!h23Req()) return;
  const a = ads.find(x => x.id === adId);
  if (!a) return;
  if (String(a.userId) === String(H23.uid())) {
    showToast('Nie możesz pisać do siebie.');
    return;
  }
  await H23.loadUsers([a.userId]);
  const conv = [H23.uid(), a.userId].sort().join('|') + '|' + adId;
  h23OpenChat(conv, adId, a.userId);
}

async function h23OpenChat(conv, adId, otherId) {
  if (!h23Req()) return;
  window.__h23OpeningChat = true;   // ← блокируем перерисовку списка
  try {
    await API.markMessagesRead(conv);
  } catch (e) { /* ignore */ }

  await H23.loadUsers([otherId]);

  const u = H23.getUser(otherId) || { id: otherId, name: 'Użytkownik' };
  const a = ads.find(x => x.id === adId);

  showPage('messages');
  const root = document.getElementById('h23-chat-list');
  if (!root) return;

  root.innerHTML = `<div class="h23-chat-window">
    <div class="h23-head-row">
      <div>
        <h2>💬 ${escapeHtml(H23.name(u))}</h2>
        <div class="h23-muted">${escapeHtml(a?.title || 'Ogłoszenie')}</div>
      </div>
      <button class="btn btn-outline" data-action="h23-messages">← Wszystkie rozmowy</button>
    </div>
    <div id="h23-thread" class="h23-messages"></div>
    <form class="h23-compose" data-on-submit="h23-send"
          data-conv="${escapeHtml(conv)}"
          data-ad="${escapeHtml(adId)}"
          data-other="${escapeHtml(otherId)}">
      <input id="h23-input" maxlength="1000" placeholder="Napisz wiadomość..." required>
      <button class="btn btn-primary">Wyślij</button>
    </form>
  </div>`;

  await h23Thread(conv);
  h23RefreshBadges();
}

async function h23Thread(conv) {
  const box = document.getElementById('h23-thread');
  if (!box) return;
  try {
    const all = await API.getMessages();
    const ms = (all || []).filter(m => m.conv === conv).sort((a, b) => a.created - b.created);

    // подтянуть имена для бабблов, если ещё не загружены
    const ids = new Set();
    ms.forEach(m => { ids.add(m.from); ids.add(m.to); });
    await H23.loadUsers([...ids]);

    box.innerHTML = ms.length
      ? ms.map(x => {
          const mine = String(x.from) === String(H23.uid());
          return `<div class="h23-bubble ${mine ? 'mine' : 'theirs'}">
            ${escapeHtml(x.text)}
            <div><small>${escapeHtml(formatDate(x.created))}</small></div>
          </div>`;
        }).join('')
      : '<div class="h23-empty">Rozpocznij rozmowę.</div>';
    box.scrollTop = box.scrollHeight;
  } catch (e) {
    box.innerHTML = '<div class="h23-empty">Błąd ładowania wiadomości.</div>';
  }
}

async function h23Send(e, conv, adId, to) {
  e.preventDefault();
  if (!h23Req()) return;
  const input = document.getElementById('h23-input');
  const text = (input?.value || '').trim();
  if (!text) return;

  try {
    await API.sendMessage({ to, adId, text });
    input.value = '';
    await h23Thread(conv);
    h23RefreshBadges();
  } catch (err) {
    showToast((err.data && err.data.error) || err.message || 'Błąd wysyłania');
  }
}

async function h23RenderMessages() {
  if (!h23Req()) return;
  let ms = [];
  try {
    ms = await API.getMessages();
  } catch (e) {
    ms = [];
  }
  const uid = H23.uid();

 
  const groups = {};
  ms.filter(x => x.from === uid || x.to === uid).forEach(x => {
    (groups[x.conv] ??= []).push(x);
  });


  const items = Object.entries(groups).map(([conv, arr]) => {
    arr.sort((a, b) => b.created - a.created);
    const last = arr[0];
    const otherId = last.from === uid ? last.to : last.from;
    const ad = ads.find(z => z.id === last.adId);
    return {
      conv,
      last,
      otherId,
      ad,
      unread: arr.some(z => z.to === uid && !z.read)
    };
  }).sort((a, b) => b.last.created - a.last.created);

  
  await H23.loadUsers(items.map(x => x.otherId));

  const root = document.getElementById('h23-chat-list');
  if (!root) return;

  root.innerHTML = items.length
    ? items.map(x => {
        const u = H23.getUser(x.otherId) || { id: x.otherId, name: 'Użytkownik' };
        return `<button class="h23-item ${x.unread ? 'unread' : ''}"
                        style="text-align:left;cursor:pointer"
                        data-action="h23-open-chat"
                        data-conv="${escapeHtml(x.conv)}"
                        data-ad="${escapeHtml(x.last.adId || '')}"
                        data-other="${escapeHtml(x.otherId)}">
          <div class="h23-avatar">${escapeHtml((H23.name(u)[0] || '?'))}</div>
          <div class="h23-main">
            <div class="h23-title">${escapeHtml(H23.name(u))} ${x.unread ? '<span class="h23-status h23-open">NOWE</span>' : ''}</div>
            <div class="h23-muted">${escapeHtml(x.ad?.title || 'Ogłoszenie')}</div>
            <div>${escapeHtml(x.last.text)}</div>
          </div>
          <div class="h23-time">${escapeHtml(formatDate(x.last.created))}</div>
        </button>`;
      }).join('')
    : '<div class="h23-empty">💬 Brak rozmów.</div>';

     h23RefreshBadges();
  window.__h23OpeningChat = false;   
}


/* ---------- notifications ---------- */

async function h23RenderNotifications() {
  if (!h23Req()) return;
  let ls = [];
  try {
    ls = await API.getNotifications();
  } catch (e) {
    ls = [];
  }
  const root = document.getElementById('h23-notifications');
  if (!root) return;

  root.innerHTML = ls.length
    ? ls.map(n => `<div class="h23-item ${n.read ? '' : 'unread'}">
        <div class="h23-avatar">${n.type === 'message' ? '💬' : n.type === 'report' ? '🚨' : '🔔'}</div>
        <div class="h23-main">
          <div class="h23-title">${escapeHtml(n.title)}</div>
          <div>${escapeHtml(n.text || '')}</div>
          <div class="h23-muted">${escapeHtml(formatDate(n.created))}</div>
        </div>
        ${n.read ? '' : `<button class="btn btn-outline" data-action="h23-mark" data-id="${escapeHtml(n.id)}">✓</button>`}
      </div>`).join('')
    : '<div class="h23-empty">🔔 Brak powiadomień.</div>';

  h23RefreshBadges();
}

async function h23Mark(id) {
  try {
    await API.markNotificationRead(id);
    h23RenderNotifications();
  } catch (e) { /* ignore */ }
}

async function h23MarkAllNotifications() {
  if (!h23Req()) return;
  try {
    await API.markAllNotificationsRead();
    h23RenderNotifications();
  } catch (e) { /* ignore */ }
}

/* ---------- reports ---------- */

async function h23OpenReport(adId) {
  if (!h23Req()) return;
  const a = ads.find(x => x.id === adId);
  if (!a || String(a.userId) === String(H23.uid())) return;

  const reason = prompt('Powód: 1 oszustwo, 2 zabroniony przedmiot, 3 spam/duplikat, 4 błędne informacje, 5 inne', '1');
  if (reason === null) return;
  const comment = prompt('Komentarz (opcjonalnie):', '') || '';

  const map = { 1: 'Oszustwo', 2: 'Zabroniony przedmiot', 3: 'Spam / duplikat', 4: 'Błędne informacje', 5: 'Inne' };
  const reasonText = map[reason] || 'Inne';

  try {
    await API.createReport({ adId, reason: reasonText, comment });
    showToast('Zgłoszenie wysłane.');
    closeModal();
  } catch (e) {
    showToast((e.data && e.data.error) || e.message || 'Błąd zgłoszenia');
  }
}

async function h23RenderReports() {
  if (!isModerator()) {
    showPage('home');
    showToast('Brak uprawnień.');
    return;
  }
  let rs = [];
  try {
    rs = await API.getReports();
  } catch (e) {
    rs = [];
  }

  // подгрузить имена репортеров
  await H23.loadUsers(rs.map(r => r.reporterId));

  const root = document.getElementById('h23-reports');
  if (!root) return;

  root.innerHTML = rs.length
    ? rs.map(r => {
        const a = ads.find(x => x.id === r.adId);
        const u = H23.getUser(r.reporterId) || { id: r.reporterId, name: 'Użytkownik' };
        return `<div class="h23-item">
          <div class="h23-avatar">🚨</div>
          <div class="h23-main">
            <div class="h23-title">${escapeHtml(a?.title || 'Usunięte ogłoszenie')}</div>
            <div><strong>${escapeHtml(r.reason)}</strong> · ${escapeHtml(H23.name(u))}</div>
            <div class="h23-muted">${escapeHtml(r.comment || 'Brak komentarza')} · ${escapeHtml(formatDate(r.created))}</div>
            <div class="h23-actions">
              ${a ? `<button class="btn btn-outline" data-action="open-ad" data-id="${escapeAttr(a.id)}">Otwórz</button>` : ''}
              ${r.status === 'open'
                ? `<button class="btn btn-primary" data-action="h23-close-report" data-id="${escapeHtml(r.id)}">Zamknij</button>
                   <button class="btn btn-danger" data-action="h23-hide-report" data-id="${escapeHtml(r.id)}">Ukryj</button>`
                : '<span class="h23-status h23-closed">Zamknięte</span>'}
            </div>
          </div>
        </div>`;
      }).join('')
    : '<div class="h23-empty">Brak zgłoszeń.</div>';
}

async function h23CloseReport(id) {
  if (!isModerator()) return;
  try {
    await API.closeReport(id);
    h23RenderReports();
  } catch (e) {
    showToast((e.data && e.data.error) || e.message || 'Błąd');
  }
}

async function h23HideReport(id) {
  if (!isModerator()) return;
  try {
    // закрываем жалобу
    await API.closeReport(id);
    // и отклоняем само объявление — найдём по id через ads
    // (или через API.getReports; чтобы не плодить вызовы, найдём в текущем состоянии)
    // Простейший путь: найти report в только что отрисованном списке
    // Но т.к. отрисованное состояние не хранится, сделаем отдельный запрос:
    const rs = await API.getReports();
    const r = rs.find(x => x.id === id);
    if (r && typeof moderateAd === 'function') {
      await moderateAd(r.adId, 'rejected');
    }
    h23RenderReports();
    renderHome();
    if (typeof renderAdmin === 'function') renderAdmin();
  } catch (e) {
    showToast((e.data && e.data.error) || e.message || 'Błąd odrzucenia');
  }
}

/* ---------- seller dashboard ---------- */

async function h23RenderSeller() {
  if (!h23Req()) return;
  const uid = H23.uid();
  const mine = ads.filter(a => String(a.userId) === String(uid));

  let msgs = [], notifs = [], reports = [];
  try {
    [msgs, notifs, reports] = await Promise.all([
      API.getMessages(),
      API.getNotifications(),
      Promise.resolve([])   // репорты обычному юзеру недоступны
    ]);
  } catch (e) { /* ignore */ }

  const active = mine.filter(a => (a.status || 'approved') === 'approved').length;
  const pending = mine.filter(a => a.status === 'pending').length;
  const rejected = mine.filter(a => a.status === 'rejected').length;
  const views = mine.reduce((n, a) => n + (Number(a.views) || 0), 0);
  const name = H23.name(currentUser);

  const root = document.getElementById('h23-seller-dashboard');
  if (!root) return;

  root.innerHTML = `
    <div class="h23-profile">
      <div class="big-avatar">${escapeHtml(name[0] || '?')}</div>
      <div>
        <h1 style="margin:0">${escapeHtml(name)}</h1>
        <div class="h23-muted">${escapeHtml(currentUser.email || '')}</div>
        <div>⭐ Profil sprzedawcy</div>
      </div>
      <div style="margin-left:auto">
        <button class="btn btn-outline" data-action="h23-seller" data-sec="settings">⚙️ Ustawienia</button>
      </div>
    </div>
    <div class="h23-grid">
      <div class="h23-stat"><div class="n">${active}</div><div class="l">Aktywne</div></div>
      <div class="h23-stat"><div class="n">${pending}</div><div class="l">Moderacja</div></div>
      <div class="h23-stat"><div class="n">${rejected}</div><div class="l">Odrzucone</div></div>
      <div class="h23-stat"><div class="n">${views}</div><div class="l">Wyświetlenia</div></div>
      <div class="h23-stat"><div class="n">${msgs.filter(m => String(m.to) === String(uid) && !m.read).length}</div><div class="l">Nowe wiadomości</div></div>
      <div class="h23-stat"><div class="n">${notifs.filter(n => !n.read).length}</div><div class="l">Nowe powiadomienia</div></div>
      <div class="h23-stat"><div class="n">${mine.filter(a => favorites.includes(a.id)).length}</div><div class="l">W ulubionych</div></div>
      <div class="h23-stat"><div class="n">${reports.length}</div><div class="l">Zgłoszenia</div></div>
    </div>
    <div class="h23-tabs">
      <button class="btn btn-outline active" data-action="h23-seller" data-sec="overview">Przegląd</button>
      <button class="btn btn-outline" data-action="h23-seller" data-sec="listings">Moje ogłoszenia</button>
      <button class="btn btn-outline" data-action="nav" data-page="messages">💬 Chat</button>
      <button class="btn btn-outline" data-action="nav" data-page="notifications">🔔 Powiadomienia</button>
    </div>
    <div id="h23-seller-section"></div>
  `;
  h23SellerSection('overview');
}

function h23SellerSection(sec, btn) {
  document.querySelectorAll('.h23-tabs .btn').forEach(x => x.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const root = document.getElementById('h23-seller-section');
  if (!root) return;
  const mine = ads.filter(a => String(a.userId) === String(H23.uid())).sort((a, b) => b.created - a.created);

  if (sec === 'listings') {
    root.innerHTML = mine.length
      ? `<div class="h23-list">${mine.map(a => `
          <div class="h23-item">
            <div class="h23-avatar">${escapeHtml(CATEGORIES[a.category]?.icon || '📦')}</div>
            <div class="h23-main">
              <div class="h23-title">${escapeHtml(a.title || 'Bez tytułu')}</div>
              <div class="h23-muted">${escapeHtml(formatPrice(a.price || 0))} · ${escapeHtml(a.city || '')}</div>
            </div>
            <span class="h23-status ${a.status === 'pending' ? 'h23-pending' : a.status === 'rejected' ? 'h23-open' : 'h23-closed'}">${escapeHtml(a.status || 'approved')}</span>
            <div class="h23-actions">
              <button class="btn btn-outline" data-action="open-ad" data-id="${escapeAttr(a.id)}">Otwórz</button>
              <button class="btn btn-outline" data-action="edit-ad" data-id="${escapeHtml(a.id)}">Edytuj</button>
            </div>
          </div>`).join('')}</div>`
      : '<div class="h23-empty">Brak ogłoszeń.</div>';
    return;
  }
    root.innerHTML = `
    <div class="h23-item">
      <div class="h23-main">
        <div class="h23-title">Kabinet sprzedawcy</div>
        <div class="h23-muted">Tu zebrane są Twoje statystyki i narzędzia sprzedażowe.</div>
      </div>
    </div>
    
    <!-- Красная зона удаления аккаунта -->
    <div style="margin-top: 20px; padding: 20px; border: 2px solid #ff4d4f; border-radius: 8px; background: #fff1f0;">
      <h3 style="color: #ff4d4f; margin-top: 0;">Usuwanie konta</h3>
      <p style="font-size: 0.9rem; color: #555;">Ta operacja jest nieodwracalna. Wszystkie Twoje ogłoszenia i wiadomości zostaną trwale usunięte.</p>
      <button class="btn" style="background-color: #ff4d4f; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;" data-action="delete-account">Usuń konto</button>
    </div>
  `;
}

/* ---------- init ---------- */

window.addEventListener('load', () => setTimeout(h23RefreshBadges, 500));
window.addEventListener('storage', () => h23RefreshBadges());

Object.assign(window, {
  h23StartChat, h23OpenChat, h23Send, h23Thread,
  h23RenderMessages, h23RenderNotifications,
  h23Mark, h23MarkAllNotifications,
  h23OpenReport, h23RenderReports, h23CloseReport, h23HideReport,
  h23RenderSeller, h23SellerSection,
  h23RefreshBadges, h23Badges
});


/* ========== Stage 2: data-action event delegation ========== */
(function initDataActionDelegation() {
  function getEl(e) {
    return e.target && e.target.closest ? e.target.closest('[data-action]') : null;
  }

  document.addEventListener('click', function (e) {
    const el = getEl(e);
    if (!el) return;
    const action = el.getAttribute('data-action');
    if (!action) return;
    if (el.tagName === 'A' || el.closest('a[data-action]')) {
      e.preventDefault();
    }

    // Stop bubbling for nested controls
    if (action === 'stop') {
      e.stopPropagation();
      return;
    }
    if (action === 'gallery-prev' || action === 'gallery-next' || action === 'fav' || action === 'toggle-model') {
      e.stopPropagation();
    }

    const d = el.dataset;
    try {
      switch (action) {
        case 'nav':
          if (typeof showPage === 'function') showPage(d.page);
          break;
        case 'go-add':
          if (typeof goAdd === 'function') goAdd();
          break;
        case 'theme':
          if (typeof toggleTheme === 'function') toggleTheme();
          break;
        case 'lang':
          if (typeof setLang === 'function') setLang(d.lang);
          break;
        case 'clear-search':
          if (typeof clearSearch === 'function') clearSearch(d.cat);
          break;
        case 'voice':
          if (typeof voiceSearch === 'function') voiceSearch(d.cat);
          break;
        case 'room-chip':
          if (typeof toggleRoomChip === 'function') toggleRoomChip(el);
          break;
        case 'pwd-toggle':
          if (typeof togglePasswordVisibility === 'function') togglePasswordVisibility(d.target, el);
          break;
        case 'admin-filter':
          if (typeof setAdminFilter === 'function') setAdminFilter(d.filter);
          break;
        case 'pay-method':
          if (typeof selectPayMethod === 'function') {
            // synthetic: need element with data-method
            selectPayMethod(el);
          }
          break;
        case 'loc-panel':
          if (typeof openLocPanel === 'function') openLocPanel(d.cat);
          break;
        case 'advanced':
          if (typeof toggleAdvancedSearch === 'function') toggleAdvancedSearch(d.cat);
          break;
        case 'realty-deal':
          if (typeof setRealtyDeal === 'function') setRealtyDeal(d.deal);
          break;
        case 'abroad-deal':
          if (typeof setAbroadDeal === 'function') setAbroadDeal(d.deal);
          break;
        case 'close-model-modal':
          if (typeof closeModelModal === 'function') closeModelModal();
          break;
        case 'brand-dd':
          if (typeof toggleBrandDropdown === 'function') toggleBrandDropdown(d.cat);
          break;
        case 'model-modal':
          if (typeof openModelModal === 'function') openModelModal(d.cat);
          break;
        case 'user-type':
          if (typeof setUserType === 'function') setUserType(d.type);
          break;
        case 'forgot':
          e.preventDefault();
          if (typeof openForgotPassword === 'function') openForgotPassword();
          break;
        case 'close-modal':
          if (typeof closeModal === 'function') closeModal();
          break;
        case 'close-pay':
          if (typeof closePayModal === 'function') closePayModal();
          break;
        case 'close-modal-id':
          if (typeof closeModalById === 'function') closeModalById(d.id);
          break;
        case 'overlay-close':
          if (e.target === el && typeof closeModalById === 'function') closeModalById(d.id);
          break;
        case 'overlay-close-modal':
          if (e.target === el && typeof closeModal === 'function') closeModal();
          break;
        case 'overlay-close-pay':
          if (e.target === el && typeof closePayModal === 'function') closePayModal();
          break;
        case 'overlay-close-model':
          if (e.target === el && typeof closeModelModal === 'function') closeModelModal();
          break;
        case 'h23-mark-all':
          if (typeof h23MarkAllNotifications === 'function') h23MarkAllNotifications();
          break;
        case 'extend-ad':
          if (typeof extendAd === 'function') extendAd();
          break;
        case 'boost-my':
          if (typeof boostMyAd === 'function') boostMyAd();
          break;
        case 'toggle-auth':
          if (typeof toggleAuthMode === 'function') toggleAuthMode();
          break;
        case 'models-all':
          if (typeof selectAllModels === 'function') selectAllModels();
          break;
        case 'models-none':
          if (typeof deselectAllModels === 'function') deselectAllModels();
          break;
        case 'models-apply':
          if (typeof applyModelSelection === 'function') applyModelSelection();
          break;
        case 'promo-preview':
          if (typeof applyPromoPreview === 'function') applyPromoPreview();
          break;
        case 'pay':
          if (typeof processPayment === 'function') processPayment();
          break;
        case 'send-reset':
          if (typeof sendResetCode === 'function') sendResetCode();
          break;
        case 'submit-reset':
          if (typeof submitResetPassword === 'function') submitResetPassword();
          break;
        case 'change-password':
          if (typeof openChangePassword === 'function') openChangePassword();
          break;
        case 'logout':
          if (typeof logout === 'function') logout();
          break;
        case 'open-ad':
          if (typeof openAd === 'function') openAd(d.id);
          break;
        case 'fav':
          e.stopPropagation();
          if (typeof toggleFav === 'function') toggleFav(d.id, e);
          break;
        case 'edit-ad':
          if (typeof editAd === 'function') editAd(d.id);
          break;
        case 'delete-ad':
          if (typeof deleteAd === 'function') deleteAd(d.id);
          break;
        case 'moderate':
          if (typeof moderateAd === 'function') moderateAd(d.id, d.status);
          break;
        case 'select-brand':
          if (typeof selectBrand === 'function') selectBrand(d.cat, d.brand);
          break;
        case 'toggle-model':
          e.stopPropagation();
          if (typeof toggleModel === 'function') toggleModel(d.model);
          break;
        case 'load-more':
          if (typeof loadMoreAds === 'function') loadMoreAds(d.cat);
          break;
        case 'modal-photo':
          if (typeof setModalPhoto === 'function') setModalPhoto(d.id, Number(d.idx));
          break;
        case 'gallery-prev':
          e.stopPropagation();
          if (typeof galleryPrev === 'function') galleryPrev();
          break;
        case 'gallery-next':
          e.stopPropagation();
          if (typeof galleryNext === 'function') galleryNext();
          break;
        case 'share':
          if (typeof shareAd === 'function') shareAd(d.id);
          break;
        case 'boost':
          if (typeof boostAd === 'function') boostAd(d.id);
          break;
        case 'h23-chat':
          if (typeof h23StartChat === 'function') h23StartChat(d.id);
          break;
        case 'h23-report':
          if (typeof h23OpenReport === 'function') h23OpenReport(d.id);
          break;
        case 'remove-photo':
          if (typeof removePhoto === 'function') removePhoto(Number(d.idx));
          break;
        case 'quick-filter':
          if (typeof applyQuickFilter === 'function') {
            const idx = d.idx != null ? Number(d.idx) : d.value;
            applyQuickFilter(d.cat, idx);
          }
          break;
        case 'geo':
          if (typeof useMyLocation === 'function') useMyLocation(d.cat);
          break;
        case 'drill-region':
          if (typeof drillLocRegion === 'function') drillLocRegion(d.cat, d.region);
          break;
        case 'drill-city':
          if (typeof drillLocCity === 'function') drillLocCity(d.cat, d.region, d.city);
          break;
        case 'select-loc':
          if (typeof selectLoc === 'function') {
            selectLoc(
              d.cat,
              d.region || null,
              d.city || null,
              d.district || null
            );
          }
          break;
        case 'loc-back-regions':
          if (typeof locPanelView !== 'undefined') {
            locPanelView = 'regions';
            locPanelRegion = null;
            locPanelCity = null;
            if (typeof renderLocPanel === 'function') renderLocPanel(d.cat);
          }
          break;
        case 'loc-back-cities':
          if (typeof locPanelView !== 'undefined') {
            locPanelView = 'cities';
            locPanelCity = null;
            if (typeof renderLocPanel === 'function') renderLocPanel(d.cat);
          }
          break;
        case 'delete-account':
          if (typeof deleteAccount === 'function') deleteAccount();
          else {
            if (confirm('Czy na pewno chcesz usunąć swoje konto? Ta operacja jest nieodwracalna.')) {
              API.deleteAccount()
                .then(() => {
                  showToast('Konto zostało usunięte');
                  setAuthToken(null, null);
                  currentUser = null;
                  STORAGE.remove('handlio_user');
                  renderAuthNav();
                  showPage('home');
                })
                .catch((err) => showToast(err.message));
            }
          }
          break;
        case 'h23-seller':
          if (typeof h23SellerSection === 'function') h23SellerSection(d.sec, el);
          break;
        case 'h23-messages':
          if (typeof h23RenderMessages === 'function') h23RenderMessages();
          break;
        case 'h23-open-chat':
          if (typeof h23OpenChat === 'function') h23OpenChat(d.conv, d.ad, d.other);
          break;
        case 'h23-mark':
          if (typeof h23Mark === 'function') h23Mark(d.id);
          break;
        case 'h23-close-report':
          if (typeof h23CloseReport === 'function') h23CloseReport(d.id);
          break;
        case 'h23-hide-report':
          if (typeof h23HideReport === 'function') h23HideReport(d.id);
          break;
        case 'auth-register':
          if (typeof showPage === 'function') showPage('auth');
          if (typeof setAuthMode === 'function') setAuthMode('register');
          break;
        case 'auth-login':
          if (typeof showPage === 'function') showPage('auth');
          if (typeof setAuthMode === 'function') setAuthMode('login');
          break;
        default:
          break;
      }
    } catch (err) {
      console.error('[data-action]', action, err);
    }
  });
})();


/* ========== Stage 3: form/input event delegation (no inline handlers) ========== */
(function initDataOnDelegation() {
  function runChange(el) {
    const a = el.getAttribute('data-on-change');
    if (!a) return;
    const d = el.dataset;
    switch (a) {
      case 'render-category':
        if (typeof renderCategory === 'function') renderCategory(d.cat);
        break;
      case 'toggle-category':
        if (typeof toggleCategoryFields === 'function') toggleCategoryFields();
        break;
      case 'auto-brand':
        if (typeof updateAutoModels === 'function') updateAutoModels();
        if (typeof generateAutoTitle === 'function') generateAutoTitle();
        break;
      case 'auto-title':
        if (typeof generateAutoTitle === 'function') generateAutoTitle();
        break;
      case 'moto-brand':
        if (typeof updateMotoModels === 'function') updateMotoModels();
        if (typeof generateMotoTitle === 'function') generateMotoTitle();
        break;
      case 'moto-title':
        if (typeof generateMotoTitle === 'function') generateMotoTitle();
        break;
      case 'realty-city':
        if (typeof onRealtyCityChange === 'function') onRealtyCityChange();
        break;
      case 'realty-country':
        if (typeof onRealtyCountryChange === 'function') onRealtyCountryChange();
        break;
      case 'realty-title':
        if (typeof generateRealtyTitle === 'function') generateRealtyTitle();
        break;
      case 'photo-select':
        if (typeof handlePhotoSelect === 'function') handlePhotoSelect({ target: el });
        break;
      default:
        break;
    }
  }

  function runInput(el) {
    const a = el.getAttribute('data-on-input');
    if (!a) return;
    const d = el.dataset;
    switch (a) {
      case 'debounced-search':
        if (typeof debouncedSearch === 'function') debouncedSearch(d.cat);
        break;
      case 'render-loc':
        if (typeof renderLocPanel === 'function') renderLocPanel(d.cat);
        break;
      case 'filter-brands':
        if (typeof filterBrands === 'function') filterBrands(d.cat);
        break;
      case 'render-category':
        if (typeof renderCategory === 'function') renderCategory(d.cat);
        break;
      case 'auto-title':
        if (typeof generateAutoTitle === 'function') generateAutoTitle();
        break;
      case 'moto-title':
        if (typeof generateMotoTitle === 'function') generateMotoTitle();
        break;
      case 'realty-title':
        if (typeof generateRealtyTitle === 'function') generateRealtyTitle();
        break;
      case 'filter-models':
        if (typeof filterModels === 'function') filterModels();
        break;
      default:
        break;
    }
  }

  document.addEventListener('change', function (e) {
    const el = e.target && e.target.closest ? e.target.closest('[data-on-change]') : null;
    if (el) runChange(el);
  });

  document.addEventListener('input', function (e) {
    const el = e.target && e.target.closest ? e.target.closest('[data-on-input]') : null;
    if (el) runInput(el);
  });

  document.addEventListener('focusin', function (e) {
    const el = e.target && e.target.closest ? e.target.closest('[data-on-focus]') : null;
    if (!el) return;
    const a = el.getAttribute('data-on-focus');
    if (a === 'search-history' && typeof showSearchHistory === 'function') {
      showSearchHistory(el.dataset.cat);
    }
  });

  document.addEventListener('keydown', function (e) {
    const el = e.target && e.target.closest ? e.target.closest('[data-on-keydown]') : null;
    if (!el) return;
    const a = el.getAttribute('data-on-keydown');
    if (a === 'search-enter' && e.key === 'Enter') {
      const cat = el.dataset.cat;
      if (typeof saveSearchHistory === 'function') saveSearchHistory(cat, el.value);
      if (typeof debouncedSearch === 'function') debouncedSearch(cat);
    }
  });

    document.addEventListener('submit', function (e) {
    const el = e.target && e.target.closest ? e.target.closest('[data-on-submit]') : null;
    if (!el) return;
    e.preventDefault();
    const a = el.getAttribute('data-on-submit');
    const d = el.dataset;
    try {
      if (a === 'auth' && typeof submitAuth === 'function') submitAuth(e);
      else if (a === 'ad' && typeof submitAd === 'function') submitAd(e);
      else if (a === 'change-password' && typeof submitChangePassword === 'function') submitChangePassword(e);
      else if (a === 'h23-send' && typeof h23Send === 'function') h23Send(e, d.conv, d.ad, d.other);
    } catch (err) {
      console.error('[data-on-submit]', a, err);
    }
  });
})();

/* --- Cookie Banner Logic --- */
(function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const isAccepted = localStorage.getItem('handlio_cookie_consent');

  if (!isAccepted) {
    setTimeout(() => { banner.style.display = 'flex'; }, 1000);
  }

  const acceptBtn = document.getElementById('cookie-accept-btn');
  const declineBtn = document.getElementById('cookie-decline-btn');

  function hideBanner(consentType) {
    localStorage.setItem('handlio_cookie_consent', consentType);
    banner.style.display = 'none';
  }

  if (acceptBtn) acceptBtn.addEventListener('click', () => hideBanner('all'));
  if (declineBtn) declineBtn.addEventListener('click', () => hideBanner('essential'));
})();