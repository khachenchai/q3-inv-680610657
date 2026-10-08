import { useItemStore } from '@/store/dataStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  // console.log(inventory);
  
  const totalProducts = inventory.length;
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalUnits, setTotalUnits] = useState<number>(0);

  useEffect(() => {
    let sum = inventory.reduce((acc, item) => acc + item.quantity * item.price, 0);
    let units = inventory.reduce((acc, item) => acc + item.quantity, 0);

    setTotalPrice(sum);
    setTotalUnits(units);
  }, [inventory])


  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold">฿{totalPrice.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">{totalProducts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Units in Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">{totalUnits}</div>
        </CardContent>
      </Card>
    </div>
  );
}
