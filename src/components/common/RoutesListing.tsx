import { Routes } from "../../constants/routes";

import { CarList, ComingSoon } from "..";

export const RoutesListing = [
  {
    path: Routes.DEFAULT,
    component: CarList,
  },
  {
    path: Routes.LEARN,
    component: ComingSoon,
  },
  {
    path: Routes.SHOP,
    component: ComingSoon,
  },
];
