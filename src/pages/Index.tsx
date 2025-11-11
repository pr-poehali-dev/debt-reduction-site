import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" className="text-accent" size={32} />
              <span className="text-2xl font-heading font-bold text-primary">Долг Списан и Точка</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Услуги', 'О компании', 'Отзывы', 'Блог', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-white">Более 15 лет опыта</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Списание долгов —<br />это реально
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Юридическая помощь в решении долговых проблем. Легально, быстро, надёжно. Работаем по всей России.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" onClick={() => scrollToSection('контакты')}>
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                  Узнать больше
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-accent">15+</div>
                  <div className="text-sm text-white/80">лет личного опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">150000+</div>
                  <div className="text-sm text-white/80">клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">101%</div>
                  <div className="text-sm text-white/80">успеха</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in">
              <img 
                src="https://cdn.poehali.dev/projects/456d2f5c-9eab-4f39-9e8e-f3dbf1082cb2/files/fac08f97-1888-4efa-8dd5-46e09d2c56eb.jpg" 
                alt="Юридическая консультация"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">Чем мы можем помочь</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Комплексная юридическая поддержка в решении долговых проблем
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Banknote',
                title: 'Списание долгов',
                description: 'Обнулим все долги. Легально и навсегда'
              },
              {
                icon: 'ShieldCheck',
                title: 'Защита от коллекторов',
                description: 'Остановка незаконных действий коллекторских агентств и защита ваших прав'
              },
              {
                icon: 'FileText',
                title: 'Реструктуризация долгов',
                description: 'Пересмотр условий кредитных договоров и снижение финансовой нагрузки'
              },
              {
                icon: 'Gavel',
                title: 'Судебное представительство',
                description: 'Защита интересов в судебных разбирательствах по долговым обязательствам'
              },
              {
                icon: 'Users',
                title: 'Консультации юристов',
                description: 'Профессиональные консультации по всем вопросам долговых обязательств'
              },
              {
                icon: 'ClipboardCheck',
                title: 'Сопровождение банкротства',
                description: 'Полное юридическое сопровождение процедуры банкротства от начала до конца'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/456d2f5c-9eab-4f39-9e8e-f3dbf1082cb2/files/a28fe293-8e4f-4a1c-8824-d9b803f2d6e8.jpg" 
                alt="Команда юристов"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">Более 15 лет помогаем людям</h2>
              <p className="text-lg text-muted-foreground mb-6">
                'Долг Списан и Точка' — команда профессиональных юристов, специализирующихся на решении долговых проблем граждан.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Award', text: 'Лицензированные специалисты с многолетним опытом' },
                  { icon: 'Target', text: 'Индивидуальный подход к каждому клиенту' },
                  { icon: 'TrendingUp', text: '98% успешно завершённых дел' },
                  { icon: 'Clock', text: 'Работаем быстро и эффективно' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-accent" size={20} />
                    </div>
                    <p className="text-lg pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">Что говорят наши клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                text: 'Спасибо огромное за помощь! Списали долг в 2 миллиона рублей. Теперь могу спокойно жить.',
                rating: 5
              },
              {
                name: 'Дмитрий Сидоров',
                text: 'Профессионалы своего дела. Решили проблему с коллекторами за 2 недели.',
                rating: 5
              },
              {
                name: 'Елена Иванова',
                text: 'Отличная команда! Провели через всю процедуру банкротства, объяснили каждый шаг.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-heading">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="блог" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Блог</Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">Полезные статьи</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Как происходит процедура банкротства физических лиц',
                date: '15 марта 2024',
                excerpt: 'Подробная инструкция о всех этапах банкротства физических лиц в 2024 году.'
              },
              {
                title: '5 способов защититься от коллекторов',
                date: '10 марта 2024',
                excerpt: 'Легальные методы защиты от незаконных действий коллекторских агентств.'
              },
              {
                title: 'Реструктуризация долга: когда это выгодно',
                date: '5 марта 2024',
                excerpt: 'В каких случаях стоит рассмотреть реструктуризацию вместо банкротства.'
              }
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="font-heading">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="text-accent p-0">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-4xl font-heading font-bold mb-4">Частые вопросы</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Сколько времени занимает процедура банкротства?',
                  answer: 'В среднем процедура банкротства физического лица занимает от 6 до 12 месяцев. Точные сроки зависят от сложности дела и загруженности суда.'
                },
                {
                  question: 'Какие долги можно списать через банкротство?',
                  answer: 'Через банкротство можно списать кредиты, займы, задолженности по ЖКХ, долги по распискам. Не списываются алименты, возмещение вреда здоровью и морального вреда.'
                },
                {
                  question: 'Сколько стоят ваши услуги?',
                  answer: 'Стоимость зависит от сложности дела. Первая консультация бесплатная. На ней мы оценим вашу ситуацию и назовём точную цену.'
                },
                {
                  question: 'Могут ли отказать в банкротстве?',
                  answer: 'Суд может отказать, если есть признаки фиктивного банкротства или умышленного создания долгов. Мы проверяем все риски перед подачей заявления.'
                },
                {
                  question: 'Что будет с моим имуществом?',
                  answer: 'Единственное жильё сохраняется. Другое имущество может быть реализовано для погашения долгов, но есть список имущества, которое нельзя забрать.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-none">
                  <AccordionTrigger className="font-heading text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground text-lg">
                Первая консультация бесплатно. Ответим на все вопросы и поможем решить вашу проблему.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { icon: 'Phone', title: 'Телефон', text: '+7 (495) 123-45-67' },
                  { icon: 'Mail', title: 'Email', text: 'info@dolgspisan.ru' },
                  { icon: 'MapPin', title: 'Адрес', text: 'Москва, ул. Примерная, д. 10' },
                  { icon: 'Clock', title: 'Часы работы', text: 'Пн-Пт: 9:00 - 20:00\nСб-Вс: 10:00 - 18:00' }
                ].map((contact, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{contact.title}</div>
                      <div className="text-muted-foreground whitespace-pre-line">{contact.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите вашу ситуацию" rows={4} />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={28} className="text-accent" />
              <span className="text-xl font-heading font-bold">Долг Списан и Точка</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white/80">© 2024 Долг Списан и Точка. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Linkedin'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon name={social} size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;