export const HERO_SECTION_ID = "hero";
export const HERO_DEMO_ID = "hero-demo";
export const MOBILE_DEMO_ID = "demo";
export const DEMO_HIGHLIGHT_EVENT = "orbit-demo-highlight";

type DemoTargetId = typeof HERO_DEMO_ID | typeof MOBILE_DEMO_ID;

export type DemoHighlightDetail = {
  targetId: DemoTargetId;
};

const DESKTOP_BREAKPOINT = 1024;
const NAV_OFFSET = 72;

const isElementVisibleEnough = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const visibleTop = Math.max(rect.top, NAV_OFFSET);
  const visibleBottom = Math.min(rect.bottom, viewportHeight - 24);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);

  return visibleHeight >= rect.height * 0.55;
};

const getActiveDemoTarget = () => {
  const isDesktopHeroLayout = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches;
  const targetId: DemoTargetId = isDesktopHeroLayout ? HERO_DEMO_ID : MOBILE_DEMO_ID;
  const target = document.getElementById(targetId) as HTMLElement | null;

  return { target, targetId };
};

export const navigateToDemo = () => {
  const { target, targetId } = getActiveDemoTarget();

  if (!target) return;

  if (isElementVisibleEnough(target)) {
    window.dispatchEvent(
      new CustomEvent<DemoHighlightDetail>(DEMO_HIGHLIGHT_EVENT, {
        detail: { targetId },
      })
    );
    return;
  }

  const scrollTarget =
    targetId === HERO_DEMO_ID
      ? (document.getElementById(HERO_SECTION_ID) as HTMLElement | null) ?? target
      : target;

  const top = window.scrollY + scrollTarget.getBoundingClientRect().top - NAV_OFFSET;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
};
