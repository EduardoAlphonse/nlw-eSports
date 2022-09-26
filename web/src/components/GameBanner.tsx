interface GameBannerProps {
  title: string;
  banner: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.banner} alt={props.title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-sm text-zinc-300 block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
