import NagivationComponent from "./navigation.component";

export default function LayoutComponent({ children }: any) {
  return (
    <div className="flex flex-col max-w-7xl items-center mx-auto w-full">
      <NagivationComponent />
      {children}
    </div>
  );
}
