import geometry from '../assets/geometry.svg';
import detailing from '../assets/detailing.svg';
import sprayGun from '../assets/spray-gun.svg';
import car from '../assets/car.svg';

const servicesData = [
  {
    slug: 'auto',
    icon: sprayGun,
    label: 'Покраска авто',
    description: 'Подготовка и профессиональная покраска кузова с подбором оттенка.',
  },
  {
    slug: 'arches',
    icon: geometry,
    label: 'Замена арок и порогов',
    description: 'Восстанавливаем и заменяем арки и пороги с антикоррозийной защитой.',
  },
  {
    slug: 'commercial',
    icon: car,
    label: 'Кузовной ремонт и покраска коммерческого транспорта',
    description:
      'Полный цикл кузовного ремонта и окраски для фургонов, пикапов и спецтехники.',
  },
  {
    slug: 'local',
    icon: detailing,
    label: 'Локальный ремонт и покраска',
    description: 'Точечно устраняем сколы и вмятины с аккуратной локальной покраской.',
  },
];

const services = servicesData.map((service) => ({
  ...service,
  sectionId: `gallery-${service.slug}`,
}));

export default services;
