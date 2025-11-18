import geometry from '../assets/geometry.svg';
import detailing from '../assets/detailing.svg';
import sprayGun from '../assets/spray-gun.svg';
import car from '../assets/car.svg';

const services = [
  {
    sectionId: 'gallery-auto',
    icon: sprayGun,
    label: 'Покраска авто',
    description: 'Подготовка и профессиональная покраска кузова с подбором оттенка.',
  },
  {
    sectionId: 'gallery-arches',
    icon: geometry,
    label: 'Замена арок и порогов',
    description: 'Восстанавливаем и заменяем арки и пороги с антикоррозийной защитой.',
  },
  {
    sectionId: 'gallery-commercial',
    icon: car,
    label: 'Кузовной ремонт и покраска коммерческого транспорта',
    description:
      'Полный цикл кузовного ремонта и окраски для фургонов, пикапов и спецтехники.',
  },
  {
    sectionId: 'gallery-local',
    icon: detailing,
    label: 'Локальный ремонт и покраска',
    description: 'Точечно устраняем сколы и вмятины с аккуратной локальной покраской.',
  },
];

export default services;
