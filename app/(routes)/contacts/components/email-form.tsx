import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/ui/button';

export default function Component() {
	return (
		<main className="p-8 ">
			<Card className="max-h-[400px] mx-auto">
				<CardHeader className="p-4 bg-gray-200 rounded-xl">
					<h2 className="text-2xl font-bold">Изпратете запитване</h2>
				</CardHeader>
				<CardContent className="p-4">
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="recipient">Подател</Label>
							<Input
								id="recipient"
								placeholder="Имейл на подател"
								type="email"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="subject">Тема</Label>
							<Input id="subject" placeholder="Тема" type="text" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Съобщение</Label>
							<Textarea
								className=""
								id="message"
								placeholder="Въведете вашето съобщение тук"
							/>
						</div>
						<div className="flex justify-end">
							<Button>Изпрати</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
