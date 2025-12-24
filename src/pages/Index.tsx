import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const depositData = {
    name: "Сидорова Анастасия Витальевна",
    depositName: "\"В плюсе\"",
    amount: 1208361.15,
    rate: 18.5,
    openDate: "27.03.2024",
    closeDate: "27.04.2026",
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
    { date: "27.12.2025", type: "Выплата процентов", amount: 69281 }
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
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Building2" size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ВТБ Онлайн</h1>
            <p className="text-muted-foreground">Личный кабинет</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl text-muted-foreground mb-2">Добро пожаловать,</h2>
          <h3 className="text-2xl font-semibold">{depositData.name}</h3>
        </div>

        <Card className="bg-card border-border p-6 mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>


        </Card>

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
      </div>
    </div>
  );
}