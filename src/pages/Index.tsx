import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const transactions = [
    { id: 0, type: 'Пополнение', amount: '+50,000', date: '24.08.2025', status: 'Выполнено' },
    { id: 1, type: 'Пополнение', amount: '+1,220,000', date: '15.12.2024', status: 'Выполнено' },
    { id: 2, type: 'Начисление %', amount: '+8,543', date: '01.12.2024', status: 'Выполнено' },
    { id: 3, type: 'Начисление %', amount: '+8,426', date: '01.11.2024', status: 'Выполнено' },
    { id: 4, type: 'Начисление %', amount: '+8,312', date: '01.10.2024', status: 'Выполнено' },
  ];

  const depositData = {
    balance: '1,220,000',
    rate: '18.5',
    term: '4',
    openDate: '24.04.2025',
    maturityDate: '28.08.2025',
    earned: '76,070',
    progress: 99
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <div className="bg-card/10 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">ВТБ Онлайн</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="User" size={16} />
                <span>Иван Петров</span>
              </div>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white">
                <Icon name="Settings" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-2 py-4">
        {/* Main Balance Card */}
        <Card className="mb-4 bg-gradient-to-r from-primary to-blue-600 border-0 text-white">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Общий баланс депозитов</p>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{depositData.balance} ₽</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={14} />
                    <span>Доходность: {depositData.rate}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>До окончания: 4 дня</span>
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-white/80 text-sm mb-1">Начислено за период</p>
                <p className="text-xl sm:text-2xl font-semibold">+{depositData.earned} ₽</p>
                <Progress value={depositData.progress} className="w-24 sm:w-32 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="deposits" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-3 bg-card/20 backdrop-blur-sm text-xs sm:text-sm">
            <TabsTrigger value="deposits" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white px-2 py-1">
              <Icon name="Wallet" size={14} className="mr-1" />
              <span className="hidden sm:inline">Депозиты</span>
              <span className="sm:hidden">Депо</span>
            </TabsTrigger>
            <TabsTrigger value="transactions" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white px-2 py-1">
              <Icon name="Receipt" size={14} className="mr-1" />
              <span className="hidden sm:inline">Операции</span>
              <span className="sm:hidden">Опер</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white px-2 py-1">
              <Icon name="BarChart3" size={14} className="mr-1" />
              <span className="hidden sm:inline">Аналитика</span>
              <span className="sm:hidden">Анал</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deposits">
            <div className="grid gap-3 lg:grid-cols-2">
              <Card className="bg-card/90 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Icon name="PiggyBank" size={20} />
                      <span>Срочный депозит №1</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                      Активный
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-white/60">Сумма вклада</p>
                      <p className="text-lg font-semibold text-white">{depositData.balance} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Процентная ставка</p>
                      <p className="text-lg font-semibold text-white">{depositData.rate}% годовых</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Срок вклада</p>
                      <p className="text-lg font-semibold text-white">{depositData.term} месяцев</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Дата открытия</p>
                      <p className="text-lg font-semibold text-white">{depositData.openDate}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/60">Прогресс по сроку</span>
                      <span className="text-sm text-white">{depositData.progress}%</span>
                    </div>
                    <Progress value={depositData.progress} className="mb-4" />
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">
                      <Icon name="Download" size={16} className="mr-2" />
                      Выписка
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Настройки
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Icon name="Calculator" size={20} />
                    <span>Калькулятор доходности</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/60">Начальная сумма:</span>
                      <span className="text-white font-semibold">1,220,000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Ставка в год:</span>
                      <span className="text-white font-semibold">8.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Срок:</span>
                      <span className="text-white font-semibold">12 месяцев</span>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex justify-between">
                        <span className="text-white/60">Проценты за весь срок:</span>
                        <span className="text-white font-bold">102,480 ₽</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-white/60">Итого к получению:</span>
                        <span className="text-white font-bold text-lg">1,322,480 ₽</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Открыть новый депозит
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <Card className="bg-card/90 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Icon name="Receipt" size={20} />
                    <span>История операций</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтры
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon 
                            name={transaction.type === 'Пополнение' ? 'ArrowDownLeft' : 'Percent'} 
                            size={16} 
                            className="text-primary" 
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{transaction.type}</p>
                          <p className="text-sm text-white/60">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${transaction.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {transaction.amount} ₽
                        </p>
                        <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Icon name="ChevronDown" size={16} className="mr-2" />
                    Загрузить еще
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-card/90 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Icon name="TrendingUp" size={20} />
                    <span>Доходность по месяцам</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { month: 'Декабрь 2024', income: 8543, progress: 90 },
                    { month: 'Ноябрь 2024', income: 8426, progress: 85 },
                    { month: 'Октябрь 2024', income: 8312, progress: 80 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white/80">{item.month}</span>
                        <span className="text-white font-semibold">+{item.income.toLocaleString()} ₽</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Icon name="Target" size={20} />
                    <span>Цели и планы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Цель по доходности</span>
                      <Badge className="bg-primary/20 text-primary border-primary/30">75%</Badge>
                    </div>
                    <p className="text-sm text-white/60 mb-3">100,000 ₽ к концу срока</p>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-white/50 mt-2">Осталось накопить: 25,000 ₽</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Среднемесячный доход:</span>
                      <span className="text-white font-semibold">8,427 ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Годовая доходность:</span>
                      <span className="text-white font-semibold">102,480 ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;