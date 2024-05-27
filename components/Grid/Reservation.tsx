import { useState } from "react";
import { Badge } from "../ui/badge";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { DateRange, DayMouseEventHandler } from "react-day-picker";
import { isSameDay } from "date-fns";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { SearchCheckIcon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  dates: z.array(z.date()).optional(),
  mobile: z.boolean().default(false).optional(),
  numberOfGuests: z.number().optional(),
  numberOfKids: z.number().optional(),
});

const ReservationForm = () => {
  const [dates, updateDates] = useState<Date[]>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dates: [],
      mobile: true,
      numberOfGuests: 0,
      numberOfKids: 0,
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <>
      <Badge className="mb-5 h-[20px] w-[200px] bg-red-800">Резервация</Badge>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-red-800 p-4 text-white">
                <FormDescription>
                  <CustomMultiple />
                </FormDescription>
              </FormItem>
            )}
          />

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
    </>
  );
};

export default ReservationForm;
