import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  characterDetail: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetail'> {
  characterDetail: (id: number) => string;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
};
