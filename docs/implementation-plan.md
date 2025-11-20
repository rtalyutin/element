# План реализации SPA-проекта

## Этап 1. Подготовка окружения
- **Задачи**
  - Убедиться, что установлены Node.js (>=18) и npm.
  - Настроить менеджер версий Node (nvm или volta) и активировать версию из `.nvmrc` (если появится).
  - Клонировать репозиторий и установить зависимости рабочего пространства.
- **Ожидаемые артефакты**
  - Глобально доступные команды `node` и `npm`.
  - Локальный клон репозитория в выбранной директории.
  - Папка `spa/node_modules/` после `npm install`.
- **Команды**
  ```bash
  nvm install 18
  nvm use 18
  git clone <repo-url>
  cd element/spa
  npm install
  ```

## Этап 2. Создание структуры проекта
- **Задачи**
  - Сгенерировать основу приложения (Vite + React) или убедиться, что каталог `spa/` создан.
  - Настроить базовую структуру с разделением на `src/app/`, `src/features/`, `src/shared/`.
  - Добавить корневые файлы конфигурации (`package.json`, `vite.config.js`, `index.html`).
- **Ожидаемые артефакты**
  - Папка `spa/src/` с подкаталогами `app/`, `features/`, `shared/`.
  - Обновлённый `spa/package.json` с необходимыми зависимостями.
  - Конфигурация сборщика `spa/vite.config.js`.
- **Команды**
  ```bash
  npm create vite@latest spa -- --template react
  mkdir -p src/{app,features,shared}
  ```

## Этап 3. Разработка ключевых фич с JSON-конфигами
- **Задачи**
  - Для каждой функциональной области создать отдельную папку в `src/features/`.
  - Определить JSON-конфиг рядом с компонентом (например, `src/features/news/config.json`).
  - Импортировать JSON в React-компонент и построить UI.
  - Добавить тестовые данные для быстрой проверки UI.
- **Ожидаемые артефакты**
  - Файлы компонентов `src/features/<feature>/index.jsx`.
  - Конфиги `src/features/<feature>/config.json`.
  - Экспорт фичи в корневое приложение через `src/app/App.jsx`.
- **Команды**
  ```bash
  mkdir -p src/features/news
  cp templates/feature/config.json src/features/news/config.json
  touch src/features/news/index.jsx
  ```

## Этап 4. Настройка общих компонентов
- **Задачи**
  - Создать каталог `src/shared/components/` для переиспользуемых элементов.
  - Выделить повторяющиеся части фич (кнопки, карточки) в отдельные компоненты.
  - Подготовить `src/shared/hooks/` и `src/shared/utils/` при необходимости.
- **Ожидаемые артефакты**
  - Файлы компонентов в `src/shared/components/` (например, `Button.jsx`, `Card.jsx`).
  - Общие стили в `src/shared/styles/` или `src/app/global.css`.
  - Документация по использованию компонентов в `docs/components-guide.md` (при наличии).
- **Команды**
  ```bash
  mkdir -p src/shared/{components,hooks,utils,styles}
  touch src/shared/components/Button.jsx
  ```

## Этап 5. Конфигурация ESLint и Prettier
- **Задачи**
  - Установить ESLint, Prettier и необходимые плагины.
  - Создать конфигурационные файлы `.eslintrc.cjs`, `.prettierrc`, `.eslintignore`, `.prettierignore`.
  - Добавить npm-скрипты `lint` и `format` в `package.json`.
  - Настроить совместимость с React и Vite.
- **Ожидаемые артефакты**
  - Файлы `spa/.eslintrc.cjs`, `spa/.prettierrc`.
  - Обновлённые скрипты в `spa/package.json`.
  - Рабочие команды `npm run lint`, `npm run format`.
- **Команды**
  ```bash
  npm install -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks
  npm pkg set scripts.lint="eslint src --ext .jsx,.js"
  npm pkg set scripts.format="prettier --write \"src/**/*.{js,jsx,json,css}\""
  ```

## Этап 6. Настройка CI
- **Задачи**
  - Создать workflow в `.github/workflows/ci.yml`.
  - Настроить шаги установки зависимостей, линтинга и сборки.
  - Подключить кеширование npm.
- **Ожидаемые артефакты**
  - Файл `.github/workflows/ci.yml` с job `build`/`lint`.
  - Статусные бейджи в README (опционально).
- **Команды**
  ```bash
  mkdir -p .github/workflows
  touch .github/workflows/ci.yml
  ```

## Этап 7. Оптимизации
- **Задачи**
  - Настроить code splitting (динамический импорт крупных фич).
  - Включить анализ бандла (например, `rollup-plugin-visualizer`).
  - Добавить lazy-loading изображений и оптимизировать статические ассеты.
  - Настроить сервис-воркер или PWA (при необходимости).
- **Ожидаемые артефакты**
  - Обновлённый `spa/vite.config.js` с плагинами оптимизации.
  - Использование `React.lazy`/`Suspense` в `src/app/App.jsx`.
  - Скрипты `npm run analyze` и отчёт в `spa/dist/stats.html` (если используется анализатор).
- **Команды**
  ```bash
  npm install -D rollup-plugin-visualizer
  npm pkg set scripts.analyze="vite build --mode analyze"
  ```
