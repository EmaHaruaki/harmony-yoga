"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Users, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DialogTitle } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

{/* チェックアイコンコンポーネント */ }
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 mr-2 text-green-500"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { href: "#about", label: "ヨガの魅力" },
    { href: "#pricing", label: "料金プラン" },
    { href: "#instructors", label: "インストラクター" },
    { href: "#gallery", label: "ギャラリー" },
    { href: "#access", label: "アクセス" },
  ]

  const galleryImages = [
    { src: "/gallery1.jpg", alt: "スタジオの様子 1" },
    { src: "/gallery2.jpg", alt: "スタジオの様子 2" },
    { src: "/gallery3.jpg", alt: "スタジオの様子 3" },
    { src: "/gallery4.jpg", alt: "スタジオの様子 4" },
    { src: "/gallery5.jpg", alt: "スタジオの様子 5" },
    { src: "/gallery6.jpg", alt: "スタジオの様子 6" },
    { src: "/gallery7.jpg", alt: "スタジオの様子 7" },
    { src: "/gallery8.jpg", alt: "スタジオの様子 8" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* ナビゲーションバー */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-full px-4 md:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Harmony Yoga</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">ヨガの魅力</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">料金プラン</Link>
            <Link href="#instructors" className="text-muted-foreground hover:text-foreground transition-colors">インストラクター</Link>
            <Link href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">ギャラリー</Link>
            <Link href="#access" className="text-muted-foreground hover:text-foreground transition-colors">アクセス</Link>
          </nav>
          <Button className="hidden md:inline-flex">体験予約</Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <DialogTitle>メニュー</DialogTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 hover:text-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8a9a5b]/40 to-[#e0e4cc]/40 z-10" />
          <div className="relative h-[70vh] w-full">
            <Image
              src="/hero.jpg?height=800&width=1600"
              alt="ヨガのポーズをとる人"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">心と体のバランスを整える</h1>
              <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
                日常から離れ、自分自身と向き合う時間を大切にするヨガスタジオ
              </p>
              <Button size="lg" className="rounded-full px-8">体験レッスンを予約する</Button>
            </div>
          </div>
        </section>

        {/* ヨガの魅力セクション */}
        <section id="about" className="py-16 bg-[#f8f7f2]">
          <div className="container max-w-full">
            <h2 className="text-3xl font-bold text-center mb-12">ヨガの魅力</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#d4e2d4]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M18 8a5 5 0 0 0-10 0v4a5 5 0 0 0 10 0V8Z" />
                        <path d="M10 8v4" />
                        <path d="M14 8v4" />
                        <path d="M18 12a5 5 0 0 1-10 0" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">心のリラクゼーション</h3>
                  <p className="text-muted-foreground text-center">
                    ヨガの呼吸法と瞑想で、ストレスを軽減し、心の平穏を取り戻します。日常の喧騒から離れ、自分自身と向き合う時間を大切にします。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e0e4cc]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" x2="4" y1="22" y2="15" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">身体の柔軟性と強さ</h3>
                  <p className="text-muted-foreground text-center">
                    様々なポーズを通じて、筋肉の柔軟性を高め、コアの強化を促進します。年齢や経験に関わらず、自分のペースで進められます。
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f8e9a1]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M12 22v-5" />
                        <path d="M9 7V2" />
                        <path d="M15 7V2" />
                        <path d="M12 17V7" />
                        <path d="M5 17h14" />
                        <path d="M5 7h14" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">健康的な生活習慣</h3>
                  <p className="text-muted-foreground text-center">
                    ヨガは単なる運動ではなく、健康的な生活習慣の一部です。姿勢の改善、睡眠の質向上、免疫力の強化など、様々な健康効果が期待できます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 料金プラン */}
        <section id="pricing" className="py-16">
          <div className="container max-w-full">
            <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  title: "ドロップイン",
                  price: "¥2,500",
                  features: ["1回のレッスン", "マット無料レンタル"],
                  buttonText: "予約する",
                },
                {
                  title: "月会員",
                  price: "¥12,000",
                  features: ["月8回までのレッスン", "マット無料レンタル", "ワークショップ10%オフ"],
                  buttonText: "申し込む",
                  popular: true,
                },
                {
                  title: "フルメンバー",
                  price: "¥15,000",
                  features: ["無制限レッスン", "マット無料レンタル", "ワークショップ20%オフ", "プライベートレッスン優先予約"],
                  buttonText: "申し込む",
                },
              ].map((plan, index) => (
                <Card key={index} className="border shadow-sm flex flex-col">
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#8a9a5b] text-white px-3 py-1 text-xs font-medium">人気</div>
                  )}
                  <CardContent className="pt-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-center mb-2">{plan.title}</h3>
                    <div className="text-3xl font-bold text-center mb-4">{plan.price}</div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-start space-x-2">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button className="w-full h-12">{plan.buttonText}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>




        {/* インストラクター紹介 */}
        <section id="instructors" className="py-16 bg-[#f8f7f2]">
          <div className="container max-w-full">
            <h2 className="text-3xl font-bold text-center mb-12">インストラクター</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "佐藤 美咲",
                  role: "ヨガインストラクター",
                  message: "ヨガを通じて、皆さんの心と体のバランスを整えるお手伝いをします。初心者の方も安心してご参加ください。",
                  image: "/instructor1.jpg?height=400&width=400"
                },
                {
                  name: "田中 健太",
                  role: "パワーヨガ専門",
                  message: "体の強さと柔軟性を同時に高めるパワーヨガで、新しい自分を発見しましょう。一緒に限界を超えていきましょう。",
                  image: "/instructor2.jpg?height=400&width=400"
                },
                {
                  name: "山本 恵",
                  role: "ヨガニドラ専門",
                  message: "深いリラクゼーションを体験できるヨガニドラで、日常のストレスから解放されましょう。心の平穏を取り戻す旅へご案内します。",
                  image: "/instructor3.jpg?height=400&width=400"
                }
              ].map((instructor, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-square relative">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{instructor.role}</p>
                    <p className="text-muted-foreground">{instructor.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ギャラリー */}
        <section id="gallery" className="py-16">
          <div className="container max-w-full">
            <h2 className="text-3xl font-bold text-center mb-12">スタジオギャラリー</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アクセス情報 */}
        <section id="access" className="py-16 bg-[#f8f7f2]">
          <div className="container max-w-full">
            <h2 className="text-3xl font-bold text-center mb-12">アクセス</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-full">
                <div className="h-full bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Harmony Yoga Studio</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#8a9a5b]" />
                      <div>
                        <p>〒150-0001</p>
                        <p>東京都渋谷区神宮前5-1-1</p>
                        <p>ハーモニービル 3F</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-[#8a9a5b]" />
                      <div>
                        <p>営業時間: 9:00 - 21:00</p>
                        <p>定休日: 火曜日・木曜日</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-[#8a9a5b]" />
                      <p>お問い合わせ: 03-1234-5678</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Google Mapの埋め込み */}
              <div className="h-full aspect-video relative rounded-lg overflow-hidden shadow-sm">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9470621271463!2d139.7033250152593!3d35.664548780197904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb999f1e1e3%3A0xf1d0bdb7c32d7b02!2z44CSMTUwLTAwMDEg5p2x5Lqs6YO95riL6LC35Yy65LiK5pys5bqX5Yy65LiK5pysIOiZl-WQi-ODk-ODqyAzZg!5e0!3m2!1sja!2sjp!4v1710111111111"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* フッター */}
      <footer className="py-12">
        <div className="container max-w-full px-4 md:px-8 flex items-center justify-between">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Harmony Yoga</h3>
              <p className="text-muted-foreground">
                心と体のバランスを整え、日常に調和をもたらすヨガスタジオです。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">ヨガの魅力</Link></li>
                <li><Link href="#schedule" className="text-muted-foreground hover:text-foreground transition-colors">レッスン</Link></li>
                <li><Link href="#instructors" className="text-muted-foreground hover:text-foreground transition-colors">インストラクター</Link></li>
                <li><Link href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">ギャラリー</Link></li>
                <li><Link href="#access" className="text-muted-foreground hover:text-foreground transition-colors">アクセス</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>)
}