<script lang="ts">
	import type { CarouselSlide, LightboxAction } from '../../lib/types';
	import { Avatar, Col, Post } from '../../lib';
	import { formatDate } from '../../lib/utils/formatDate';
	import type { Action } from '../../lib/types/lightbox-action';

	let creator = {
		avatar:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		name: 'Joe Montana'
	};
	let created1 = new Date(2022, 8, 11);
	let created2 = new Date(2022, 8, 10);
	let created3 = new Date(2022, 7, 3);
	let created4 = new Date(2021, 8, 11);
	let images1: CarouselSlide[] = [
		{
			id: '11',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		}
	];
	let images2: CarouselSlide[] = [
		{
			id: '21',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '22',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		}
	];
	let images3: CarouselSlide[] = [
		{
			id: '31',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '32',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '33',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		}
	];
	let images4: CarouselSlide[] = [
		{
			id: '41',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '42',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '43',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '44',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		}
	];
	let images5: CarouselSlide[] = [
		{
			id: '51',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '52',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '53',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '54',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		},
		{
			id: '55',
			src: 'https://images.unsplash.com/photo-1664075550378-6b07dd9830a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
		}
	];
	let images6: CarouselSlide[] = [
		{
			id: '61',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '62',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '63',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '64',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		},
		{
			id: '65',
			src: 'https://images.unsplash.com/photo-1664075550378-6b07dd9830a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
		},
		{
			id: '66',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '67',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '68',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '69',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		},
		{
			id: '70',
			src: 'https://images.unsplash.com/photo-1664075550378-6b07dd9830a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
		},
		{
			id: '71',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '72',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '73',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '74',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		},
		{
			id: '75',
			src: 'https://images.unsplash.com/photo-1664075550378-6b07dd9830a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
		},
		{
			id: '76',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '77',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '78',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '79',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		},
		{
			id: '80',
			src: 'https://images.unsplash.com/photo-1664075550378-6b07dd9830a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
		},
		{
			id: '81',
			src: 'https://images.unsplash.com/photo-1664035350797-f57ecca6fa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '82',
			src: 'https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			id: '83',
			src: 'https://images.unsplash.com/photo-1664007226382-e008792e9dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		},
		{
			id: '84',
			src: 'https://images.unsplash.com/photo-1664064568815-38b7be217ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80'
		},
		{
			id: '85',
			src: 'https://images.unsplash.com/photo-1664075550378-6b07dd9830a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
		}
	];
	let content =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
	let likes = ['1', '2'];
	let comments = ['1', '2'];

	const lightboxActions: LightboxAction[] = [];
</script>

<Col class="col-24 sm:col-12 md:col-8">
	<Post>
		<Post.Header slot="header">
			<Avatar slot="avatar" src={creator.avatar} />
			<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
			<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
		</Post.Header>

		<Post.Content slot="content">
			{@html content}
		</Post.Content>

		<Post.Images id="post-1" slot="images" images={images1} {lightboxActions} />

		<Post.Status slot="status" likes={[]} comments={[]} />

		<Post.Actions slot="actions">
			<Post.Actions.Action icon="thumb_up" label="Like" />
			<Post.Actions.Action icon="comment" label="Comment" />
			<Post.Actions.Action icon="share" label="Share" />
		</Post.Actions>
	</Post>
</Col>
<Col class="col-24 sm:col-12 md:col-8">
	<Post>
		<Post.Header slot="header">
			<Avatar slot="avatar" src={creator.avatar} />

			<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
			<Post.Header.Created slot="created">{formatDate(created2)}</Post.Header.Created>
		</Post.Header>

		<Post.Content slot="content">
			{@html content}
		</Post.Content>

		<Post.Images id="post-2" slot="images" images={images2} {lightboxActions} />

		<Post.Status slot="status" {likes} comments={[]} />

		<Post.Actions slot="actions">
			<Post.Actions.Action icon="thumb_up" label="Like" />
			<Post.Actions.Action icon="comment" label="Comment" />
			<Post.Actions.Action icon="share" label="Share" />
		</Post.Actions>
	</Post>
</Col>
<Col class="col-24 sm:col-12 md:col-8">
	<Post>
		<Post.Header slot="header">
			<Avatar slot="avatar" src={creator.avatar} />
			<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
			<Post.Header.Created slot="created">{formatDate(created3)}</Post.Header.Created>
		</Post.Header>

		<Post.Content slot="content">
			{@html content}
		</Post.Content>

		<Post.Images id="post-3" slot="images" images={images3} {lightboxActions} />

		<Post.Status slot="status" {likes} {comments} />

		<Post.Actions slot="actions">
			<Post.Actions.Action icon="thumb_up" label="Like" />
			<Post.Actions.Action icon="comment" label="Comment" />
			<Post.Actions.Action icon="share" label="Share" />
		</Post.Actions>
	</Post>
</Col>
<Col class="col-24 sm:col-12 md:col-8">
	<Post>
		<Post.Header slot="header">
			<Avatar slot="avatar" src={creator.avatar} />
			<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
			<Post.Header.Created slot="created">{formatDate(created4)}</Post.Header.Created>
		</Post.Header>

		<Post.Content slot="content">
			{@html content}
		</Post.Content>

		<Post.Images id="post-4" slot="images" images={images4} {lightboxActions} />

		<Post.Status slot="status" {likes} comments={[]} />

		<Post.Actions slot="actions">
			<Post.Actions.Action icon="thumb_up" label="Like" />
			<Post.Actions.Action icon="comment" label="Comment" />
			<Post.Actions.Action icon="share" label="Share" />
		</Post.Actions>
	</Post>
</Col>
<Col class="col-24 sm:col-12 md:col-8">
	<Post>
		<Post.Header slot="header">
			<Avatar slot="avatar" src={creator.avatar} />
			<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
			<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
		</Post.Header>

		<Post.Content slot="content">
			{@html content}
		</Post.Content>

		<Post.Images id="post-5" slot="images" images={images5} {lightboxActions} />

		<Post.Status slot="status" likes={[]} {comments} />

		<Post.Actions slot="actions">
			<Post.Actions.Action icon="thumb_up" label="Like" />
			<Post.Actions.Action icon="comment" label="Comment" />
			<Post.Actions.Action icon="share" label="Share" />
		</Post.Actions>
	</Post>
</Col>
<Col class="col-24 sm:col-12 md:col-8">
	<Post>
		<Post.Header slot="header">
			<Avatar slot="avatar" src={creator.avatar} />
			<Post.Header.Creator slot="creator">{creator.name}</Post.Header.Creator>
			<Post.Header.Created slot="created">{formatDate(created1)}</Post.Header.Created>
		</Post.Header>

		<Post.Content slot="content">
			{@html content}
		</Post.Content>

		<Post.Images id="post-6" slot="images" images={images6} {lightboxActions} />

		<Post.Status slot="status" likes={[]} {comments} />

		<Post.Actions slot="actions">
			<Post.Actions.Action icon="thumb_up" label="Like" />
			<Post.Actions.Action icon="comment" label="Comment" />
			<Post.Actions.Action icon="share" label="Share" />
		</Post.Actions>
	</Post>
</Col>
