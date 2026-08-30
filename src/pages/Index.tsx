import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import Chat from "@/components/Chat";

interface ExchangeRates {
  USD: number;
  EUR: number;
  CNY: number;
}

export default function Index() {
  const [activeTab, setActiveTab] = useState("deposit");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  const [ratesLoading, setRatesLoading] = useState(true);

  const cardBalance = 1900;

  useEffect(() => {
    fetch("https://functions.poehali.dev/225e414e-7ab5-4354-ad44-45fc405f97bc")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setRatesLoading(false);
      })
      .catch(() => setRatesLoading(false));
  }, []);
  const depositData = {
    name: "Сидорова Анастасия Витальевна",
    depositName: "\"В плюсе\"",
    amount: 1299883.15,
    rate: 18.5,
    openDate: "27.03.2024",
    closeDate: "27.09.2026",
    withdrawal: {
      date: "27.08.2025",
      amount: 150000
    }
  };

  const transactions = [
    { date: "27.03.2024", type: "Пополнение", amount: 1000000 },
    { date: "27.07.2024", type: "Выплата процентов", amount: 71350 },
    { date: "28.11.2024", type: "Выплата процентов", amount: 72320 },
    { date: "28.04.2025", type: "Выплата процентов", amount: 73290 },
    { date: "27.08.2025", type: "Выплата процентов", amount: 72120 },
    { date: "27.08.2025", type: "Списание", amount: -150000 },
    { date: "27.12.2025", type: "Выплата процентов", amount: 69281 },
    { date: "27.05.2026", type: "Выплата процентов", amount: 91522 }
  ];

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ВТБ Онлайн</h1>
              <p className="text-muted-foreground">Личный кабинет</p>
            </div>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-lg hover:bg-card">
                <Icon name="Settings" size={26} />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="bg-card border-border w-72">
              <p className="font-semibold mb-3">Связаться с нами</p>
              <div className="space-y-3">
                <a
                  href="tel:+79818108685"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size={18} className="text-primary" />
                  +7 981 810-86-85
                </a>
                <a
                  href="mailto:anastasia_sidorova2016@mail.ru"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Icon name="Mail" size={18} className="text-primary" />
                  anastasia_sidorova2016@mail.ru
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mb-6">
          <h2 className="text-xl text-muted-foreground mb-2">Добро пожаловать,</h2>
          <h3 className="text-2xl font-semibold">{depositData.name}</h3>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="deposit" className="flex items-center gap-2">
              <Icon name="TrendingUp" size={18} />
              Вклад
            </TabsTrigger>
            <TabsTrigger value="card" className="flex items-center gap-2">
              <Icon name="CreditCard" size={18} />
              Карта
            </TabsTrigger>
            <TabsTrigger value="investments" className="flex items-center gap-2">
              <Icon name="LineChart" size={18} />
              Инвестиции
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Icon name="History" size={18} />
              История операций
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deposit">
            <Card className="bg-card border-border p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                  <h3 className="text-2xl font-bold">{depositData.depositName}</h3>
                </div>
                <Badge variant="outline" className="text-accent border-accent mb-4">
                  Активный вклад
                </Badge>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Текущая сумма</p>
                  <p className="text-3xl font-bold text-accent">{formatAmount(depositData.amount)}</p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Percent" size={18} className="text-primary" />
                    <p className="text-sm text-muted-foreground">Процентная ставка</p>
                  </div>
                  <p className="text-2xl font-bold">{depositData.rate}%</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <p className="text-sm text-muted-foreground">Дата открытия</p>
                  </div>
                  <p className="text-xl font-semibold">{depositData.openDate}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="CalendarClock" size={18} className="text-primary" />
                    <p className="text-sm text-muted-foreground">Дата закрытия</p>
                  </div>
                  <p className="text-xl font-semibold">{depositData.closeDate}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Clock" size={18} className="text-primary" />
                    <p className="text-sm text-muted-foreground">Срок вклада</p>
                  </div>
                  <p className="text-xl font-semibold">4 месяца</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="card">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="CreditCard" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold">Карта</h3>
              </div>

              <div className="relative rounded-2xl p-6 bg-gradient-to-br from-primary to-primary/70 text-white overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <Icon name="Wifi" size={28} className="rotate-90" />
                  <span className="font-semibold tracking-wide">ВТБ</span>
                </div>
                <p className="text-sm text-white/70 mb-1">Баланс</p>
                <p className="text-3xl font-bold mb-8">{formatAmount(cardBalance)}</p>
                <div className="flex items-center justify-between">
                  <p className="tracking-[0.2em] text-lg">•••• •••• •••• 4821</p>
                  <p className="font-semibold italic">VISA</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="investments">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="LineChart" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold">Инвестиции</h3>
              </div>

              <div className="rounded-xl border border-border p-6">
                <p className="text-sm text-muted-foreground mb-4">Актуальные курсы валют, ЦБ РФ</p>
                {ratesLoading ? (
                  <p className="text-sm text-muted-foreground">Загрузка курсов...</p>
                ) : (
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" size={20} className="text-accent" />
                      <span className="text-sm text-muted-foreground">USD</span>
                      <span className="font-bold">{rates?.USD ?? "—"} ₽</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Euro" size={20} className="text-accent" />
                      <span className="text-sm text-muted-foreground">EUR</span>
                      <span className="font-bold">{rates?.EUR ?? "—"} ₽</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="CircleDollarSign" size={20} className="text-accent" />
                      <span className="text-sm text-muted-foreground">CNY</span>
                      <span className="font-bold">{rates?.CNY ?? "—"} ₽</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="History" size={24} className="text-primary" />
                <h3 className="text-2xl font-bold">История операций</h3>
              </div>

              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "Пополнение" 
                            ? "bg-accent/20" 
                            : transaction.type === "Списание"
                            ? "bg-destructive/20"
                            : "bg-primary/20"
                        }`}>
                          <Icon 
                            name={transaction.type === "Пополнение" ? "ArrowDownToLine" : transaction.type === "Списание" ? "ArrowUpFromLine" : "Coins"} 
                            size={20} 
                            className={transaction.type === "Пополнение" ? "text-accent" : transaction.type === "Списание" ? "text-destructive" : "text-primary"}
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{transaction.type}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <p className={`text-xl font-bold ${
                        transaction.type === "Пополнение" ? "text-accent" : transaction.type === "Списание" ? "text-destructive" : "text-primary"
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}{formatAmount(transaction.amount)}
                      </p>
                    </div>
                    {index < transactions.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          <Button 
            size="lg" 
            className="rounded-full h-14 w-14 shadow-lg"
            onClick={() => window.open('tel:+78001002424', '_self')}
          >
            <Icon name="Phone" size={24} />
          </Button>
          <Button 
            size="lg" 
            className="rounded-full h-14 w-14 shadow-lg bg-accent hover:bg-accent/90"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <Icon name="MessageCircle" size={24} />
          </Button>
        </div>

        <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
}