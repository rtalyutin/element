const visualBlocks = [
  {
    title: '3D-модели повреждений',
    description:
      'Создаём цифровую копию кузова, чтобы анализировать геометрию и планировать восстановление с миллиметровой точностью.',
  },
  {
    title: 'Матрица ремонта',
    description:
      'Комбинируем этапы и материалы в интерактивных диаграммах, чтобы согласовать сроки и бюджет с клиентом.',
  },
  {
    title: 'Мониторинг в реальном времени',
    description:
      'Собираем телеметрию по температуре, влажности и усилиям при вытяжке — данные доступны на планшете мастера.',
  },
  {
    title: 'Фото и видео-отчёты',
    description:
      'Фиксируем ключевые этапы работ и автоматически формируем презентацию «до/после» для страховщиков.',
  },
];

const Visualizations = () => (
  <section className="visualizations" aria-labelledby="visualizations-heading">
    <div className="visualizations__intro">
      <p className="eyebrow">Цифровая мастерская</p>
      <h1 id="visualizations-heading" className="visualizations__title">
        Как мы визуализируем прогресс ремонта
      </h1>
      <p className="visualizations__description">
        Каждая визуализация помогает команде и клиентам видеть состояние автомобиля без
        сложных терминов — только наглядные данные и прозрачные шаги.
      </p>
    </div>
    <div className="visualizations__grid" role="list">
      {visualBlocks.map((block) => (
        <article
          key={block.title}
          className="visualizations__card"
          data-testid="visualizations-card"
          role="listitem"
        >
          <h2 className="visualizations__card-title">{block.title}</h2>
          <p className="visualizations__card-description">{block.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Visualizations;
