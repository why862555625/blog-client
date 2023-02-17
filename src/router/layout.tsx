import { lazy, Suspense } from "react";
export default function layout(path: string) {
  //这里可以加上路由守卫
  /* @vite-ignore */
  const Com = lazy(() => import(path));
  return (
    <Suspense fallback={<>加载中...</>}>
      <Com></Com>
    </Suspense>
  );
}
