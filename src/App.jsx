import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CurtainSizeApp() {
  const [customer, setCustomer] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [records, setRecords] = useState([]);

  const convertToChi = (cm) => (cm / 30.3).toFixed(1);

  const handleAdd = () => {
    if (!customer || !width || !length) return;
    setRecords([
      ...records,
      {
        customer,
        width,
        length,
        widthChi: convertToChi(width),
        lengthChi: convertToChi(length),
      },
    ]);
    setCustomer("");
    setWidth("");
    setLength("");
  };

  const handleClear = () => setRecords([]);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Curtain Size Helper</h1>

      <Card>
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder="客戶名稱"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
          <Input
            placeholder="寬 (cm)"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <Input
            placeholder="長 (cm)"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <Button onClick={handleAdd} className="w-full" size="lg">
            <Plus className="mr-2 h-4 w-4" /> 儲存
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {records.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border p-4 rounded-2xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{r.customer}</p>
              <p>
                尺寸：{r.width} cm × {r.length} cm （{r.widthChi} 尺 × {r.lengthChi} 尺）
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {records.length > 0 && (
        <div className="flex gap-4 justify-end">
          <Button variant="destructive" onClick={handleClear}>
            <Trash2 className="mr-2 h-4 w-4" /> 清除全部
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" /> 匯出 Excel
          </Button>
        </div>
      )}
    </div>
  );
}
