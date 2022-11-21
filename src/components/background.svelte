<script type="ts">
	import { CircleGeometry, MeshStandardMaterial, BoxGeometry, DoubleSide } from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		Group,
		HemisphereLight,
		Mesh,
		OrbitControls,
		PerspectiveCamera
	} from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { TorusGeometry } from 'three';
	const scale = spring(1);
	const x = 20;
	const y = 3;
	const z = 5;
</script>

<div>
	<Canvas>
		<PerspectiveCamera position={{ x: 21, y: 20, z: 25 }} fov={24}>
			<OrbitControls
				maxPolarAngle={DEG2RAD * 80}
				autoRotate={true}
				autoRotateSpeed={2}
				enableZoom={false}
				target={{ y: 0.5 }}
			/>
		</PerspectiveCamera>

		<DirectionalLight position={{ x: 3, y: 10, z: 12 }} />
		<DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} />
		<AmbientLight intensity={0.4} />

		<!-- Cube -->
		<!-- <Group scale={$scale}> -->
		<!-- bar magnet -->
		<!-- <Mesh
			geometry={new BoxGeometry(x, y, z)}
			material={new MeshStandardMaterial({ color: 'red' })}
		/> -->
		<!-- north pole -->
		<Mesh
			geometry={new BoxGeometry(0.5, 32)}
			material={new MeshStandardMaterial({ color: 'red' })}
			position={{ x: 10, y: 1.5, z: 0 }}
		/>
		<!-- south pole -->
		<Mesh
			geometry={new BoxGeometry(0.5, 32)}
			material={new MeshStandardMaterial({ color: 'blue' })}
			position={{ x: -10, y: 1.5, z: 0 }}
		/>

		<Mesh
			interactive
			position={{ y }}
			castShadow
			rotation={{ x: 0.5, y: 0.5 }}
			geometry={new TorusGeometry(2, 1, 40, 100, 6.3)}
			material={new MeshStandardMaterial({ color: '#ffc0cb', metalness: 0.5, roughness: 0 })}
		/>

		<!-- </Group> -->

		<!-- Floor -->
		<!-- <Mesh
			receiveShadow
			rotation={{ x: -90 * (Math.PI / 180) }}
			geometry={new CircleGeometry(10, 72)}
			material={new MeshStandardMaterial({ side: DoubleSide, color: 'white' })}
		/> -->
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
	}
</style>
