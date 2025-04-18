
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-lg mb-4">О компании</h3>
            <p className="text-muted-foreground">
              Мы создаем инновационные решения для бизнеса с 2010 года, 
              помогая клиентам достигать успеха.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <address className="not-italic text-muted-foreground">
              <p>г. Москва, ул. Примерная, 123</p>
              <p>info@example.com</p>
              <p>+7 (999) 123-45-67</p>
            </address>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary cursor-pointer">Главная</li>
              <li className="hover:text-primary cursor-pointer">Услуги</li>
              <li className="hover:text-primary cursor-pointer">О нас</li>
              <li className="hover:text-primary cursor-pointer">Контакты</li>
            </ul>
          </div>
        </div>
        
        <Separator />
        
        <div className="pt-6 text-center text-muted-foreground">
          <p>© {currentYear} Ваша компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
