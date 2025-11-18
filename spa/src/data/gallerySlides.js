import auto01 from '../assets/gallery/auto-01.svg';
import auto02 from '../assets/gallery/auto-02.svg';
import auto03 from '../assets/gallery/auto-03.svg';
import arches01 from '../assets/gallery/arches-01.svg';
import arches02 from '../assets/gallery/arches-02.svg';
import arches03 from '../assets/gallery/arches-03.svg';
import commercial01 from '../assets/gallery/commercial-01.svg';
import commercial02 from '../assets/gallery/commercial-02.svg';
import commercial03 from '../assets/gallery/commercial-03.svg';
import local01 from '../assets/gallery/local-01.svg';
import local02 from '../assets/gallery/local-02.svg';
import local03 from '../assets/gallery/local-03.svg';

const gallerySlides = {
  auto: [
    {
      id: 'auto-1',
      title: 'Подготовка поверхности',
      caption: 'Шлифуем кузов и размечаем проблемные зоны перед покраской.',
      image: auto01,
    },
    {
      id: 'auto-2',
      title: 'Подбор оттенка',
      caption: 'Настраиваем факел покраски и тестируем покрытие на стенде.',
      image: auto02,
    },
    {
      id: 'auto-3',
      title: 'Финишное нанесение',
      caption: 'Контролируем равномерность слоя и температуру в камере.',
      image: auto03,
    },
  ],
  arches: [
    {
      id: 'arches-1',
      title: 'Демонтаж коррозии',
      caption: 'Очищаем арки и подготавливаем металл под новую вставку.',
      image: arches01,
    },
    {
      id: 'arches-2',
      title: 'Подгонка деталей',
      caption: 'Тестируем посадку новых порогов на стапеле.',
      image: arches02,
    },
    {
      id: 'arches-3',
      title: 'Герметизация швов',
      caption: 'Покрываем стыки герметиком и антикором.',
      image: arches03,
    },
  ],
  commercial: [
    {
      id: 'commercial-1',
      title: 'Диагностика фургона',
      caption: 'Замеряем геометрию и фиксируем объём восстановления.',
      image: commercial01,
    },
    {
      id: 'commercial-2',
      title: 'Подготовка площадей',
      caption: 'Закрываем большие поверхности и подбираем материалы.',
      image: commercial02,
    },
    {
      id: 'commercial-3',
      title: 'Контроль сборки',
      caption: 'Проверяем ровность панелей после окраса.',
      image: commercial03,
    },
  ],
  local: [
    {
      id: 'local-1',
      title: 'Точечный ремонт',
      caption: 'Выводим вмятины и подготавливаем небольшие зоны.',
      image: local01,
    },
    {
      id: 'local-2',
      title: 'Локальное напыление',
      caption: 'Наносим краску так, чтобы граница была невидима.',
      image: local02,
    },
    {
      id: 'local-3',
      title: 'Полировка и блеск',
      caption: 'Сводим переходы и полируем поверхность.',
      image: local03,
    },
  ],
};

export default gallerySlides;
