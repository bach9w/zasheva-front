import React, { useState } from "react";
import { Check } from "lucide-react";
import Front from "@/public/zasheva-front.png";
import { isSameDay, set } from "date-fns";
import { DateRange, DayMouseEventHandler, DayPicker } from "react-day-picker";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowLeft, FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import { LocateIcon, SearchCheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import "react-day-picker/src/style.css";
import Image from "next/image";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, z } from "zod";
import { Input } from "../ui/input";
import { SubmitButton } from "./submit-button";
import { features } from "process";

const rooms = [
  {
    name: "Единично",
    price: "30 лв",
    interval: 1,
    features: ["Легло", "Телевизор"],
    priceId: 0,
    capacity: 1,
  },
  {
    name: "Двойна",
    price: "50 лв",
    interval: 1,
    features: ["Легло", "Телевизор"],
    priceId: 1,
    capacity: 2,
  },
  {
    name: "Студио",
    price: "60 лв",
    interval: 1,
    features: ["Легло", "Телевизор"],
    priceId: 1,
    capacity: 3,
  },
];

export const RevealBento = () => {
  return (
    <div className="min-h-screen  px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />

        <EmailListBlock />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        {rooms.map((room) => (
          <div key={room.priceId}>
            <PricingCard
              name={room.name}
              price={room.price}
              interval={room.interval}
              priceId={room.priceId}
              features={room.features}
              capacity={room.capacity}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function PricingCard({
  name,
  price,
  interval,

  features,
  priceId,
  capacity,
}: {
  name: any;
  price: any;
  interval: any;

  features: string[];
  priceId?: any;
  capacity?: number;
}) {
  return (
    <Block>
      <div className="pt-6">
        <h2 className="mb-2 text-2xl font-medium text-gray-900">{name}</h2>

        <p className="mb-6 text-4xl font-medium text-gray-900">
          {price}
          <span className=" text-xl font-normal text-gray-600">на вечер</span>
        </p>
        <span>капацитет - {capacity} </span>
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <form>
          <input type="hidden" name="priceId" value={priceId} />

          <SubmitButton />
        </form>
      </div>
    </Block>
  );
}

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border-none bg-white p-6",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <Image
      width={500}
      height={500}
      src="/map.jpg"
      alt="avatar"
      className="size-14 mb-4 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      <span className=" text-zinc-400">Добре дошли.</span>
      <span className="text-[20px] text-white"> by ZASHEVA</span>
    </h1>
    <a
      href="#"
      className="flex items-center justify-between gap-1 text-red-300 hover:underline"
    >
      <b className="flex items-center">
        <LocateIcon />
        APPLE
        <FiArrowRight />
      </b>
      <b className="flex items-center justify-center text-center text-[10px]">
        41.83935265198173, 23.489226596416508
      </b>
      <b className="flex items-center">
        <FiArrowLeft />
        GOOGLE
        <LocateIcon />
      </b>
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        SAPID
        <span className="text-[8px]">COCKTAILS & FOOD</span>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl uppercase text-white"
      >
        Booking
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-orange-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>

    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiFacebook />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-xl text-black">
    <p>
      Зашева къща{" "}
      <span className="text-zinc-600">
        е чудесен вариант за ценителите на спокойствието, домашния уют и
        индивидуалния подход към изискванията на клиентите. Намираме се само на
        метри от централният площад на град Банско, който открива врати за
        всички Вас, както за културни прояви и забележителности така и за
        незабравими нощи. Разполагаме с шест двойни стаи и едно студио. Всички
        стаи са оборудвани с най-необходимите неща за една перфектна почивка. На
        разположение на нашите гости има още лоби бар, място за хранене и отдих
        с просторна градина, 24 часова рецепция и паркинг. По желание може да
        бъде предложена закуска.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <div className="flex w-full items-center justify-center bg-red-800 text-[20px]">
      LOCATION <FiMapPin />
    </div>
    <Image
      className="h-full w-full rounded-lg object-left"
      src={Front}
      alt="Front"
      width={500}
      height={1000}
    />
    <p className="text-lg text-center text-zinc-800">BANSKO, BULGARIA</p>
    <p className="text-lg text-center text-zinc-800">3 TOMA VISHANOV STR.</p>
  </Block>
);

function CustomMultiple() {
  const [value, setValue] = useState<Date[]>([]);
  const initiallySelectedDate = new Date();
  const [selectedDate, setSelectedDate] = useState<DateRange | any>(
    initiallySelectedDate,
  );
  const handleDayClick: DayMouseEventHandler = (day, modifiers) => {
    const newValue = [...value];
    if (modifiers.selected) {
      const index = value.findIndex((d) => isSameDay(day, d));
      newValue.splice(index, 1);
    } else {
      newValue.push(day);
    }
    setValue(newValue);
    setSelectedDate({ from: newValue[0], to: newValue[newValue.length - 1] });
  };

  const handleResetClick = () => setValue([]);

  let footer = <>Изберете ден за да започнете</>;

  if (value.length > 0)
    footer = (
      <>
        <div className="flex w-full flex-col items-center justify-center bg-red-800 text-white">
          {value.length === 1 ? (
            <>
              Избрали сте {value.length} ден.{" "}
              <button onClick={handleResetClick}>Рестарт</button>
            </>
          ) : (
            <>
              Избрали сте {value.length} дни.{" "}
              <button onClick={handleResetClick}>Рестарт</button>
            </>
          )}
        </div>
      </>
    );

  return (
    <Calendar
      selected={selectedDate}
      className="flex w-full justify-center gap-2 px-3  py-1.5 text-black transition-colors focus:border-red-300 focus:outline-0"
      onDayClick={handleDayClick}
      modifiersStyles={{
        selected: {
          color: "white",
          backgroundColor: "#679dee",
          borderRadius: 25,
        },
      }}
      styles={{}}
      modifiers={{ selected: value, disabled: { before: new Date() } }}
      footer={footer}
    />
  );
}

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
  numberOfGuests: z.number().optional(),
  numberOfKids: z.number().optional(),
});

const EmailListBlock = () => {
  const [childrenIn, setChildrenIn] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
      numberOfGuests: 0,
      numberOfKids: 0,
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <Block className="col-span-12 md:col-span-12">
      <Badge className="mb-5 h-[20px] w-[200px] bg-red-800">Резервация</Badge>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CustomMultiple />
          <FormField
            control={form.control}
            name="numberOfGuests"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center gap-6 space-x-3 space-y-0 rounded-md border bg-red-800 p-4 text-white">
                <FormLabel>Брой гости?</FormLabel>
                <FormDescription>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                </FormDescription>
                <div className="space-y-1 leading-none">
                  <FormDescription>Отбележете брой гости</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-red-800 p-4 text-white">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Деца?</FormLabel>
                  <FormDescription>
                    Отбележете при резервация с деца.
                  </FormDescription>
                </div>
                {field.value && (
                  <FormField
                    control={form.control}
                    name="numberOfKids"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center justify-center gap-6 space-x-3 space-y-0 rounded-md border bg-red-800 p-4 text-white">
                        <FormDescription>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                        </FormDescription>
                        <div className="space-y-1 leading-none">
                          <FormDescription>
                            Отбележете брой деца
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                )}
              </FormItem>
            )}
          />

          <Button
            className="flex items-center justify-center bg-red-800 hover:bg-black hover:text-red-800"
            type="submit"
          >
            Провери наличност <SearchCheckIcon />
          </Button>
        </form>
      </Form>
    </Block>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
