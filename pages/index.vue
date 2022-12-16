<script setup lang="ts">
</script>

<template>
	<GlowWrapper class="pt-64 h-[calc(100vh-4rem)] bg-[url('/background.svg')] bg-cover z-0">
		<div class="mx-auto sm:px-6 lg:px-8 px-4 pt-12 max-w-7xl relative flex flex-col items-center sm:items-start">
			<h1 class="relative text-5xl font-black text-left md:text-6xl lg:text-7xl z-20">
				Welcome to PIOI
			</h1>
			<p class="max-w-sm text-lg text-left font-semibold leading-8 text-gray-300 z-20 mt-8">
				The informatics olympiad for polytechnic and ITE students
			</p>
			<NuxtLink to="/join">
				<Button class="font-semibold mt-4">
					<div class="flex items-center py-1 pl-4 pr-3 text-sm">
						Join
						<Icon name="lucide:chevron-right" class="ml-2" />
					</div>
				</Button>
			</NuxtLink>
			<img src="/hero.svg" alt="" class="pointer-events-none absolute hidden md:block -right-8 sm:-top-[80px] md:-top-[120px] lg:-top-[220px] w-3/4 z-10">
		</div>
	</GlowWrapper>
	<div class="mx-auto relative max-w-7xl flex flex-col items-center gap-8 px-8">
		<span class="w-12 rounded-full h-1 bg-white" />
		<h2 class="text-center text-2xl sm:text-3xl">
			Contest Platform <br> & <br> Languages
		</h2>
		<GlowWrapper class="relative grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-16">
			<NuxtLink to="https://www.python.org/">
				<Card class="w-56 aspect-[4/3] mx-auto" is-styled>
					<Icon size="48" name="fa6-brands:python" class="absolute left-1/2 -translate-x-1/2 -top-8" />
					<div class="p-4 h-full flex items-center justify-center text-lg font-bold gap-4">
						Python
					</div>
				</Card>
			</NuxtLink>
			<NuxtLink to="https://docs.oracle.com/en/java/">
				<Card class="w-56 aspect-[4/3] mx-auto" is-styled>
					<Icon size="48" name="la:java" class="absolute left-1/2 -translate-x-1/2 -top-8" />
					<div class="p-4 h-full flex items-center justify-center text-lg font-bold gap-4">
						Java
					</div>
				</Card>
			</NuxtLink>
			<NuxtLink to="https://en.cppreference.com/w/">
				<Card class="w-56 aspect-[4/3] mx-auto" is-styled>
					<Icon size="48" name="file-icons:c" class="absolute left-1/2 -translate-x-1/2 -top-8" />
					<div class="p-4 h-full flex items-center justify-center text-lg font-bold gap-4">
						C++
					</div>
				</Card>
			</NuxtLink>
			<NuxtLink to="https://go.dev/">
				<Card class="w-56 aspect-[4/3] mx-auto" is-styled>
					<Icon size="48" name="file-icons:go" class="absolute left-1/2 -translate-x-1/2 -top-6" />
					<div class="p-4 h-full flex items-center justify-center text-lg font-bold gap-4">
						Go Lang
					</div>
				</Card>
			</NuxtLink>
		</GlowWrapper>
		<GlowWrapper class="mt-48 w-full">
			<Section>
				<div class="flex flex-col gap-8 mx-auto">
					<span class="mx-auto w-12 rounded-full h-1 bg-white" />
					<h2 class="text-xl text-center">
						Introductory Workshops
						<p class="text-sm text-center text-[#8a8c93] mt-2 px-2 sm:px-0">
							We know that this may be the first time you have participated in an informatics Olympiad.
							<br>
							So, to help ease you into the competition, we have prepared some workshops so
							<br>
							that you can learn the basics of competitive programming!
						</p>
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 w-fit gap-4 mx-auto">
						<Card class="w-fit sm:w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="file-icons:c" />
									Basics of C++
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									6 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									As some of you may not have much knowledge about C++, this workshop will introduce you to the programming language and prepare you for the challenges!
								</p>
							</div>
						</Card>
						<Card class="w-fit sm:w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="heroicons:square-3-stack-3d-20-solid" />
									Introduction to Data Structures
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									7 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									Effective use of data structures complement good algorithms. But what are data structures and how can we use them? In this workshop, we will introduce common data structures, how they work under the hood and how they can be applied.
								</p>
							</div>
						</Card>
						<Card class="w-fit sm:w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="bx:network-chart" />
									Introduction to Algorithms
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									8 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									Algorithms make the difference between executing your program in the next day or the next year. This workshop will give you a rough footing on the fundamentals of algorithms, so, if you don’t have much prior knowledge on algorithms, this is the workshop for you!
								</p>
							</div>
						</Card>
						<Card class="w-fit sm:w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="fluent:book-question-mark-24-filled" />
									Practical Use of Algorithms
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									9 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									What's the point of theory if we do not know how to apply it? In this workshop, we will go through the thought process and dive into how the algorithms taught in previous workshops can be applied in real-world scenarios and practical programming questions!
								</p>
							</div>
						</Card>
					</div>
					<div class="inline-flex justify-end">
						<Button class="text-white/70">
							Join
							<KBD>Ctrl</KBD>
							<KBD>J</KBD>
						</Button>
					</div>
				</div>
			</Section>
		</GlowWrapper>
	</div>
</template>

<style scoped>

</style>
