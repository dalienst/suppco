import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardFooter } from "@/app/components/ui/card"
import { Separator } from "@/app/components/ui/separator"
import { useEffect, useState } from "react"
import { ChartContainer } from "@/app/components/ui/chart";

export default function OrderTracker({}) {
  const [invoiceCount, setInvoiceCount] = useState({
    approval:4,
    paid:5,
    pending:3,
    cancelled:2
  });

//   const countInvoices = (invoices) => {
//     const counts = invoices?.invoices.reduce((acc, invoice) => {
//       acc.total += 1;
//       if (invoice.status === 'Paid') {
//         acc.paid += 1;
//       } else if (invoice.status === 'Pending') {
//         acc.pending += 1;
//       } else if (invoice.status === 'Cancelled') {
//         acc.cancelled += 1;
//       }
  
//       return acc;
//     }, {
//       total: 0,
//       paid: 0,
//       pending: 0,
//       cancelled: 0,
//     });
  
//     return counts;
//   };
  
//   useEffect(() => {
//     if (invoices) {
//       const counts = countInvoices(invoices);
//       setInvoiceCount(counts);
//     }
//   }, [invoices]);

  return (
    <Card className="">
        <h2 className="text-xl px-4 pt-4 font-semibold">Order Tracker</h2>
      <CardContent className="flex flex-col md:flex-row md:items-center gap-4 p-4 pb-2">
        <ChartContainer
          config={{
            Approval: {
              label: "Approval",
            },
            Paid: {
              label: "Paid",
            },
            Pending: {
              label: "Pending",
            },
            Cancelled: {
              label: "Cancelled",
            },
          }}
          className="w-full max-h-[150px]"
        >
          <BarChart
            margin={{
              left: 4,
              right: 0,
              top: 0,
              bottom: 10,
            }}
            data={[
              {
                activity: "Approval",
                value: invoiceCount.approval,
                label: invoiceCount.approval,
                fill: "#007bff",
              },
              {
                activity: "Paid",
                value: invoiceCount.paid,
                label: invoiceCount.paid,
                fill: "#28a745",
              },
              {
                activity: "Pending",
                value: invoiceCount.pending,
                label: invoiceCount.pending,
                fill: "#ffc107",
              },
              {
                activity: "Cancelled",
                value: invoiceCount.cancelled,
                label: invoiceCount.cancelled,
                fill: "#dc3545",
              },
            ]}
            layout="vertical"
            barSize={32}
            barGap={2}
          >
            <XAxis type="number" dataKey="value" hide />
            <YAxis
              dataKey="activity"
              type="category"
              tickLine={false}
              tickMargin={2}
              axisLine={false}
              className="capitalize"
            />
            <Bar dataKey="value" radius={5}>
              <LabelList
                position="insideLeft"
                dataKey="label"
                fill="white"
                offset={8}
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      <div className="flex flex-row border-t p-4">
        <div className="flex flex-wrap w-full items-center gap-2">
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Approval</div>
            <div className="text-2xl tabular-nums leading-none">
              {invoiceCount.approval}
            </div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Pending</div>
            <div className="text-2xl tabular-nums leading-none">
              {invoiceCount.pending}
            </div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Paid</div>
            <div className="text-2xl tabular-nums leading-none">
              {invoiceCount.paid}
            </div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Cancelled</div>
            <div className="text-2xl tabular-nums leading-none">
              {invoiceCount.cancelled}
            </div>
          </div>
        </div>
      </div>
      </CardContent>
    </Card>
  )
}
