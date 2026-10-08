import { StudentInfo } from "./StudentInfo";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap text-center">

            <Drawer swipeDirection="right">
              <DrawerTrigger>
                <button type="button" className="focus:outline-none">
                  <StudentInfo />
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className={"text-xl font-bold"}>ข้อมูลนักศึกษา</DrawerTitle>
                  <DrawerDescription>Student information</DrawerDescription>
                </DrawerHeader>

                <div className="p-4">
                  <Card className="relative mx-auto w-full max-w-sm pt-0">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="relative z-20 h-full object-cover "
                    />

                    <CardHeader>
                      <CardTitle>Khachenchai Jaikla</CardTitle>
                      <CardDescription>
                        นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex space-x-1">
                        <Badge>Hobbies</Badge>
                        <p>ดูหนัง, ฟังเพลง, เล่นกลองชุด, เขียนเว็บ</p>
                      </div>
                      <div className="flex space-x-1">
                        <Badge>Email</Badge>
                        <p>khachenchai_j@cmu.ac.th</p>
                      </div>
                      <div className="flex space-x-1">
                        <Badge>Social</Badge>
                        <p>https://www.instagram.com/chenchoyyy</p>
                      </div>
                    </CardContent>
                    <CardFooter className="">
                      <p>รหัสนักศึกษา: 680610657</p>
                    </CardFooter>
                  </Card>
                </div>

                <DrawerFooter>
                  <DrawerClose>
                    <Button className={"w-full"}>Close</Button>
                  </DrawerClose>
                </DrawerFooter>

              </DrawerContent>
            </Drawer>

            <span className="text-sm text-muted-foreground whitespace-nowrap">
              &copy; {new Date().getFullYear()} CPE207 Corp. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
