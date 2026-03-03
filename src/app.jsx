const { useState, useEffect } = React;

const Mail = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const Package = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
);
const Truck = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
);
const AlertCircle = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
);
const CheckCircle2 = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
const Calculator = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
);
const Scale = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
);
const MapPin = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const Hash = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>
);

const LETTER_RATES = [
    { max: 20, price: 8 },
    { max: 50, price: 16 },
    { max: 100, price: 24 },
    { max: 250, price: 40 },
    { max: 500, price: 72 },
    { max: 1000, price: 112 },
    { max: 2000, price: 160 }
];
const PRINT_RATES = [
    { max: 50, price: 6 },
    { max: 100, price: 11 },
    { max: 250, price: 16 },
    { max: 500, price: 32 },
    { max: 1000, price: 56 },
    { max: 2000, price: 88 }
];
const SMALL_PACKET_UNIT_PRICE = 12;
const SMALL_PACKET_UNIT_WEIGHT = 100;
const PARCEL_RATES = [
    { max: 5000, local: 70, domestic: 80, island: 100 },
    { max: 10000, local: 90, domestic: 100, island: 125 },
    { max: 15000, local: 110, domestic: 120, island: 150 },
    { max: 20000, local: 135, domestic: 145, island: 180 }
];
const SMART_PAC_RATES = [
    { id: 1, name: '1號包 (橙)', size: '約16×28cm', price: 36 },
    { id: 2, name: '2號包 (綠)', size: '約23×32cm', price: 48 },
    { id: 3, name: '3號包 (藍)', size: '約28×38cm', price: 60 }
];
const FEE_REGISTERED = 20;
const FEE_PROMPT = 7;
const FEE_AR = 15;

const PostCalc = () => {
    const [mode, setMode] = useState('mail');
    const [subType, setSubType] = useState('letter');
    const [weight, setWeight] = useState('');
    const [quantity, setQuantity] = useState('1');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isPrompt, setIsPrompt] = useState(false);
    const [hasAR, setHasAR] = useState(false);
    const [parcelDest, setParcelDest] = useState('domestic');
    const [smartPacType, setSmartPacType] = useState(1);

    const [bulkOrdinaryApplied, setBulkOrdinaryApplied] = useState(false);
    const [bulkLocal, setBulkLocal] = useState(true);
    const [bulkAdd1, setBulkAdd1] = useState(false);
    const [bulkAdd2, setBulkAdd2] = useState(false);
    const [bulkAdd3, setBulkAdd3] = useState(false);
    const [bulkAdd4, setBulkAdd4] = useState(false);
    const [bulkAdd5, setBulkAdd5] = useState(false);
    const [bulkRegApplied, setBulkRegApplied] = useState(false);

    const [result, setResult] = useState(0);
    const [breakdown, setBreakdown] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!bulkAdd1) {
            if (bulkAdd3) setBulkAdd3(false);
            if (bulkAdd4) setBulkAdd4(false);
        }
    }, [bulkAdd1]);

    useEffect(() => {
        calculate();
    }, [mode, subType, weight, quantity, isRegistered, isPrompt, hasAR, parcelDest, smartPacType, bulkOrdinaryApplied, bulkLocal, bulkAdd1, bulkAdd2, bulkAdd3, bulkAdd4, bulkAdd5, bulkRegApplied]);

    const calculate = () => {
        setError('');
        let basePrice = 0;
        let details = [];
        const w = parseFloat(weight);
        const q = parseInt(quantity, 10);

        if (isNaN(q) || q <= 0) {
            setResult(0);
            setBreakdown('請輸入有效件數');
            return;
        }

        if (mode === 'mail') {
            if (subType !== 'postcard' && (!w || w <= 0)) {
                setResult(0);
                setBreakdown('請輸入有效重量');
                return;
            }

            if (subType === 'letter') {
                if (w > 2000) { setError('信函限重 2 公斤'); return; }
                const tier = LETTER_RATES.find(r => w <= r.max);
                if (tier) basePrice = tier.price;
                details.push(`信函($${basePrice}×${q})`);
            }
            else if (subType === 'print') {
                if (w > 2000) { setError('印刷物一般限重 2 公斤'); return; }
                const tier = PRINT_RATES.find(r => w <= r.max);
                if (tier) basePrice = tier.price;
                details.push(`印刷物($${basePrice}×${q})`);
            }
            else if (subType === 'smallpacket') {
                if (w > 1000) { setError('小包限重 1 公斤'); return; }
                const units = Math.ceil(w / SMALL_PACKET_UNIT_WEIGHT);
                basePrice = units * SMALL_PACKET_UNIT_PRICE;
                details.push(`小包($${basePrice}×${q})`);
            }
            else if (subType === 'postcard') {
                basePrice = 5;
                details.push(`明信片($5×${q})`);
            }

            let totalBase = basePrice * q;
            let discountAmt = 0;

            if (isRegistered) {
                if (q >= 1000 && bulkRegApplied) {
                    discountAmt = Math.round(totalBase * 0.02);
                    totalBase -= discountAmt;
                    details.push(`大宗掛號折扣(-$${discountAmt})`);
                }
                const regFee = FEE_REGISTERED * q;
                totalBase += regFee;
                details.push(`掛號(+$${regFee})`);
            } else {
                if (q >= 5000 && bulkOrdinaryApplied && (subType === 'letter' || subType === 'print' || subType === 'postcard')) {
                    let basicDiscount = 0;
                    if (q >= 50000) basicDiscount = bulkLocal ? 12 : 3.5;
                    else if (q >= 20000) basicDiscount = bulkLocal ? 7 : 1.5;
                    else if (q >= 5000) basicDiscount = bulkLocal ? 6 : 1;

                    let addDiscount = 0;
                    if (bulkAdd1) addDiscount += 2;
                    if (bulkAdd2 && subType !== 'postcard') addDiscount += 2;
                    if (bulkAdd3 && bulkAdd1) addDiscount += 2;
                    if (q >= 20000) {
                        if (bulkAdd4 && bulkAdd1) addDiscount += 5;
                        if (bulkAdd5) addDiscount += 3;
                    }

                    const totalPct = basicDiscount + addDiscount;
                    discountAmt = Math.round((basePrice * q) * (totalPct / 100));
                    totalBase -= discountAmt;
                    details.push(`大宗折扣${totalPct}%(-$${discountAmt})`);
                }
            }

            if (isPrompt) {
                const promptFee = FEE_PROMPT * q;
                totalBase += promptFee;
                details.push(`限時(+$${promptFee})`);
            }
            if (hasAR) {
                if (!isRegistered) {
                    setError('附回執需搭配「掛號」');
                    return;
                }
                const arFee = FEE_AR * q;
                totalBase += arFee;
                details.push(`回執(+$${arFee})`);
            }

            setResult(totalBase);
            setBreakdown(details.join(' '));

        } else if (mode === 'parcel') {
            if (!w || w <= 0) {
                setResult(0);
                setBreakdown('請輸入有效重量');
                return;
            }
            if (w > 20000) { setError('國內包裹限重 20kg'); return; }

            const tier = PARCEL_RATES.find(r => w <= r.max);
            let unitPrice = 0;
            if (tier) {
                if (parcelDest === 'local') unitPrice = tier.local;
                else if (parcelDest === 'domestic') unitPrice = tier.domestic;
                else if (parcelDest === 'island') unitPrice = tier.island;

                const destText = parcelDest === 'local' ? '同縣市' : parcelDest === 'domestic' ? '外縣市' : '外島';
                details.push(`包裹(${destText} $${unitPrice}×${q})`);
                setResult(unitPrice * q);
                setBreakdown(details.join(' '));
            } else {
                setError('超過重量限制'); return;
            }

        } else if (mode === 'smartpac') {
            const pack = SMART_PAC_RATES.find(p => p.id === smartPacType);
            let total = 0;
            if (pack) {
                total += pack.price * q;
                details.push(`${pack.name}($${pack.price}×${q} 含掛號)`);
            }
            if (isPrompt) {
                total += FEE_PROMPT * q;
                details.push(`限時(+$${FEE_PROMPT * q})`);
            }
            if (hasAR) {
                total += FEE_AR * q;
                details.push(`回執(+$${FEE_AR * q})`);
            }
            setResult(total);
            setBreakdown(details.join(' '));
        }
    };

    const ModeButton = ({ id, label, icon: Icon }) => (
        <button
        onClick={() => {
            setMode(id);
            setWeight('');
            setQuantity('1');
            setError('');
            if (id === 'smartpac') {
                setIsRegistered(true);
            } else {
                setIsRegistered(false);
            }
            setIsPrompt(false);
            setHasAR(false);
        }}
        className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-2 md:px-4 rounded-xl transition-all duration-200 border-2 font-medium text-sm md:text-base ${
            mode === id
            ? 'bg-green-600 text-white border-green-600 shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:bg-green-50'
        }`}
        >
        <Icon size={20} />
        <span>{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-3 md:p-8 flex flex-col items-center">

        <header className="max-w-sm w-full mb-4 mt-2 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-2xl shadow-lg mb-3">
            <Calculator className="text-white" size={28} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">中華郵政資費試算</h1>
            <p className="text-slate-500 text-sm">快速查詢信函、包裹與便利包郵資</p>
        </header>

        <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden border border-slate-100">

            <div className="p-3 grid grid-cols-3 gap-2 bg-slate-50/80 border-b border-slate-100">
                <ModeButton id="mail" label="函件" icon={Mail} />
                <ModeButton id="parcel" label="包裹" icon={Package} />
                <ModeButton id="smartpac" label="便利包" icon={Truck} />
            </div>

            <div className="p-5 space-y-5">

            {mode === 'mail' && (
                <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700 mb-1">郵件類型</label>
                <div className="grid grid-cols-2 gap-2">
                    {['letter:信函', 'print:印刷物', 'smallpacket:小包', 'postcard:明信片'].map((item) => {
                    const [val, text] = item.split(':');
                    return (
                        <button
                        key={val}
                        onClick={() => setSubType(val)}
                        className={`py-2 px-2 rounded-lg text-sm font-medium border transition-colors ${
                            subType === val
                            ? 'bg-green-100 text-green-800 border-green-200'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                        >
                        {text}
                        </button>
                    );
                    })}
                </div>
                </div>
            )}

            {mode === 'smartpac' && (
                <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700 mb-1">便利包尺寸</label>
                <div className="space-y-2">
                    {SMART_PAC_RATES.map((pac) => (
                    <div
                        key={pac.id}
                        onClick={() => setSmartPacType(pac.id)}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        smartPacType === pac.id
                            ? 'border-green-500 bg-green-50 ring-1 ring-green-500'
                            : 'border-slate-200 hover:border-green-300'
                        }`}
                    >
                        <div>
                        <div className="font-bold text-slate-800">{pac.name}</div>
                        <div className="text-xs text-slate-500">{pac.size}</div>
                        </div>
                        <div className="text-green-700 font-bold">${pac.price}</div>
                    </div>
                    ))}
                </div>
                <div className="bg-amber-50 text-amber-800 text-xs p-3 rounded-lg flex gap-2 leading-tight">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <p>便利包費用已包含掛號服務。限重 1 公斤。</p>
                </div>
                </div>
            )}

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2 col-span-2">
                    {mode !== 'smartpac' && subType !== 'postcard' && (
                        <div className="space-y-2 mb-4">
                            <label className="flex items-center justify-between text-sm font-semibold text-slate-700">
                                <span>單件重量 (公克/g)</span>
                                <span className="text-xs text-slate-400 font-normal">
                                {mode === 'parcel' ? '限重 20kg' : subType === 'letter' || subType === 'print' ? '限重 2kg' : '限重 1kg'}
                                </span>
                            </label>
                            <div className="relative">
                                <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="輸入重量..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg font-medium text-slate-800 placeholder:text-slate-300"
                                />
                                <Scale className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                                {[20, 50, 100, 250, 500].map(w => (
                                <button key={w} onClick={() => setWeight(w)} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs hover:bg-slate-200 transition-colors whitespace-nowrap flex-shrink-0">
                                    {w}g
                                </button>
                                ))}
                                {mode === 'parcel' && [1000, 5000, 10000].map(w => (
                                <button key={w} onClick={() => setWeight(w)} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs hover:bg-slate-200 transition-colors whitespace-nowrap flex-shrink-0">
                                {w}g
                                </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-2 col-span-2">
                    <label className="flex items-center text-sm font-semibold text-slate-700">
                        <span>交寄件數</span>
                    </label>
                    <div className="relative">
                        <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg font-medium text-slate-800 placeholder:text-slate-300"
                        />
                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </div>
                </div>
            </div>

            {mode === 'mail' && parseInt(quantity, 10) >= 1000 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-3 mt-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">大宗交寄優惠</p>
                    
                    {isRegistered ? (
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="checkbox" checked={bulkRegApplied} onChange={(e) => setBulkRegApplied(e.target.checked)} className="mt-1 rounded text-green-600" />
                            <div className="text-sm text-slate-700">
                                <span className="font-semibold">大宗掛號 (基本郵資 2% 折扣)</span>
                                <p className="text-xs text-slate-500 mt-0.5">需自印20碼條碼並上傳電子檔</p>
                            </div>
                        </label>
                    ) : parseInt(quantity, 10) >= 5000 ? (
                        <div className="space-y-3">
                            <label className="flex items-start gap-2 cursor-pointer">
                                <input type="checkbox" checked={bulkOrdinaryApplied} onChange={(e) => setBulkOrdinaryApplied(e.target.checked)} className="mt-1 rounded text-green-600" />
                                <div className="text-sm text-slate-700">
                                    <span className="font-semibold">套用分區捆紮折扣</span>
                                    <p className="text-xs text-slate-500 mt-0.5">需按前3碼分區定數捆紮，並符合基本條件</p>
                                </div>
                            </label>
                            
                            {bulkOrdinaryApplied && (
                                <div className="pl-6 space-y-2 pt-2 border-t border-slate-200">
                                    <div className="flex bg-slate-200 p-1 rounded-lg w-max mb-3">
                                        <button onClick={() => setBulkLocal(true)} className={`px-3 py-1 text-xs font-medium rounded-md ${bulkLocal ? 'bg-white text-green-700 shadow-sm' : 'text-slate-600'}`}>本地</button>
                                        <button onClick={() => setBulkLocal(false)} className={`px-3 py-1 text-xs font-medium rounded-md ${!bulkLocal ? 'bg-white text-green-700 shadow-sm' : 'text-slate-600'}`}>外地</button>
                                    </div>
                                    
                                    <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                                        <input type="checkbox" checked={bulkAdd1} onChange={(e) => setBulkAdd1(e.target.checked)} className="rounded text-green-600" />
                                        名址格式標準化 (+2%)
                                    </label>
                                    
                                    {subType !== 'postcard' && (
                                        <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                                            <input type="checkbox" checked={bulkAdd2} onChange={(e) => setBulkAdd2(e.target.checked)} className="rounded text-green-600" />
                                            紙質標準型信封，封口密封 (+2%)
                                        </label>
                                    )}
                                    
                                    <label className={`flex items-center gap-2 cursor-pointer text-sm ${bulkAdd1 ? 'text-slate-700' : 'text-slate-400'}`}>
                                        <input type="checkbox" disabled={!bulkAdd1} checked={bulkAdd3} onChange={(e) => setBulkAdd3(e.target.checked)} className="rounded text-green-600" />
                                        提供電子檔 (+2%)
                                    </label>
                                    
                                    {parseInt(quantity, 10) >= 20000 && (
                                        <>
                                            <label className={`flex items-center gap-2 cursor-pointer text-sm ${bulkAdd1 ? 'text-slate-700' : 'text-slate-400'}`}>
                                                <input type="checkbox" disabled={!bulkAdd1} checked={bulkAdd4} onChange={(e) => setBulkAdd4(e.target.checked)} className="rounded text-green-600" />
                                                列印3+3碼並排序 (+5%)
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                                                <input type="checkbox" checked={bulkAdd5} onChange={(e) => setBulkAdd5(e.target.checked)} className="rounded text-green-600" />
                                                按投遞局及3+3碼專袋裝箱 (+3%)
                                            </label>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-xs text-slate-500">大宗平常信函需達 5,000 件以上方享折扣。</p>
                    )}
                </div>
            )}

            {mode === 'parcel' && (
                <div className="space-y-2 mt-4">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MapPin size={16} />
                <span>寄達地</span>
                </label>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    {[
                    { id: 'local', text: '同縣市' },
                    { id: 'domestic', text: '外縣市' },
                    { id: 'island', text: '外島' }
                    ].map((dest) => (
                    <button
                        key={dest.id}
                        onClick={() => setParcelDest(dest.id)}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                        parcelDest === dest.id
                            ? 'bg-white text-green-700 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        {dest.text}
                    </button>
                    ))}
                </div>
            </div>
            )}

            <div className="space-y-2 pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">加值服務 (每件)</p>

                <div className="space-y-2">

                <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all active:scale-[0.99] ${
                    isRegistered ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'
                } ${mode === 'smartpac' ? 'opacity-60 cursor-not-allowed' : ''}`}>
                    <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isRegistered ? 'bg-green-500 border-green-500' : 'border-slate-300'
                    }`}>
                        {isRegistered && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className="font-medium text-slate-700">掛號</span>
                    </div>
                    <span className="text-sm text-slate-500">
                    {mode === 'smartpac' ? '已內含' : '+$20'}
                    </span>
                    <input
                    type="checkbox"
                    checked={isRegistered}
                    onChange={(e) => {
                        if (mode !== 'smartpac') setIsRegistered(e.target.checked);
                    }}
                    className="hidden"
                    disabled={mode === 'smartpac'}
                    />
                </label>

                <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all active:scale-[0.99] ${
                    isPrompt ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'
                }`}>
                    <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isPrompt ? 'bg-blue-500 border-blue-500' : 'border-slate-300'
                    }`}>
                        {isPrompt && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className="font-medium text-slate-700">限時</span>
                    </div>
                    <span className="text-sm text-slate-500">+$7</span>
                    <input type="checkbox" checked={isPrompt} onChange={(e) => setIsPrompt(e.target.checked)} className="hidden" />
                </label>

                <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all active:scale-[0.99] ${
                    hasAR ? 'bg-purple-50 border-purple-200' : 'bg-white border-slate-200'
                }`}>
                    <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        hasAR ? 'bg-purple-500 border-purple-500' : 'border-slate-300'
                    }`}>
                        {hasAR && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className="font-medium text-slate-700">回執 (雙掛號)</span>
                    </div>
                    <span className="text-sm text-slate-500">+$15</span>
                    <input type="checkbox" checked={hasAR} onChange={(e) => setHasAR(e.target.checked)} className="hidden" />
                </label>

                </div>
            </div>

            </div>

            <div className="bg-slate-900 p-5 text-white">
            {error ? (
                <div className="flex items-center gap-2 text-red-300 font-medium animate-pulse">
                <AlertCircle size={20} />
                <span>{error}</span>
                </div>
            ) : (
                <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1 pr-4">
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">預估總郵資</span>
                    <span className="text-slate-300 text-xs leading-tight line-clamp-3">{breakdown}</span>
                </div>
                <div className="text-4xl font-bold tracking-tight shrink-0">
                    <span className="text-xl align-top mr-1 opacity-50">$</span>
                    {result}
                </div>
                </div>
            )}
            </div>

        </div>

        <footer className="mt-6 mb-2 text-slate-400 text-xs text-center max-w-xs leading-relaxed px-4">
            資費依據 2024 年中華郵政官網。<br/>大宗交寄折扣依據 112 年實施標準。<br/>實際金額請以臨櫃秤重與檢核為準。
        </footer>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PostCalc />);