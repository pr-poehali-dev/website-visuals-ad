import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-[1080px] aspect-[1080/900] rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/780264f7-adfc-47dd-b944-1f5218062afc/files/843c5c95-9864-45b9-9603-c7a3029845e4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/80 via-transparent to-[#1A1F2C]/60" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-12 py-16">
          <div className="text-center space-y-6 max-w-3xl">
            <div className="inline-block px-6 py-2 bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-full backdrop-blur-sm">
              <p className="text-[#8B5CF6] font-semibold tracking-wide text-sm">БЫСТРО • НАДЁЖНО • ПРОФЕССИОНАЛЬНО</p>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white block mb-3">Сайт на заказ,</span>
              <span className="inline-block">
                <span className="text-white">всего за </span>
                <span className="text-[#00FF41] font-extrabold">30 дней</span>
              </span>
            </h1>
            
            <p className="text-[#C8C8C9] text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Профессиональная разработка с гарантией качества и сроков
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/0 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/0 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black/0 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black/0 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Index;