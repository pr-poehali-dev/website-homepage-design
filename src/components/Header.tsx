
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="bg-background py-4 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo-b.svg" alt="Логотип" className="h-10 w-auto" />
          <span className="ml-2 text-xl font-semibold">Компания</span>
        </div>
        
        {/* Десктопная навигация */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Услуги</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">О нас</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Войти</Button>
          <Button>Регистрация</Button>
        </div>
        
        {/* Мобильное меню кнопка */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4 mb-4">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="w-full">Войти</Button>
            <Button className="w-full">Регистрация</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
