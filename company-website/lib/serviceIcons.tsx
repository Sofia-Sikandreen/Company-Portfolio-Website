import {
  FaJs, FaReact, FaVuejs, FaNodeJs, FaFigma,
  FaWordpress, FaJira, FaDocker, FaYoutube,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiPhp, SiLaravel, SiPython,
  SiDjango, SiSketch, SiDrupal, SiTailwindcss, SiFlutter, SiShopify,
} from "react-icons/si";
import { MdCloud, MdMemory } from "react-icons/md";

export const serviceIconMap: Record<string, any> = {
  js: FaJs, react: FaReact, vue: FaVuejs, nextjs: SiNextdotjs,
  typescript: SiTypescript, php: SiPhp, laravel: SiLaravel, python: SiPython,
  django: SiDjango, node: FaNodeJs, figma: FaFigma, sketch: SiSketch,
  wordpress: FaWordpress, drupal: SiDrupal, jira: FaJira, tailwind: SiTailwindcss,
  aws: MdCloud, flutter: SiFlutter, docker: FaDocker, ai: MdMemory,
  shopify: SiShopify, youtube: FaYoutube, cloud: MdCloud,
};