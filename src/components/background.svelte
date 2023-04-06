<script type="ts">
	import { MeshPhongMaterial, MeshStandardMaterial, TorusGeometry } from 'three';
	import { T, Canvas, OrbitControls, useTexture } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';
	import { Editable, Theatre } from '@threlte/theatre';
	const scale = spring(1);
	const x = 20;
	const y = 3;
	const z = 5;

	const tex = useTexture(
		'https://s3-us-west-2.amazonaws.com/sabrinamarkon-images/images/pinkdonutwithsprinkles.png'
	);
</script>

<div>
	<Canvas>
		<Theatre>
			<T.PerspectiveCamera makeDefault position={[21, 20, 25]} fov={24}>
				<Editable name="Camera" scale transform controls />
				<OrbitControls
					maxPolarAngle={degToRad(80)}
					autoRotate={true}
					autoRotateSpeed={50}
					enableZoom={false}
					enablePan={true}
					target={{ y: 0.5 }}
				/>
			</T.PerspectiveCamera>

			<T.DirectionalLight position={[3, 10, 12]} />
			<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
			<T.AmbientLight intensity={0.2} />

			<T.Mesh interactive position={[0, y, 0]} castShadow receiveShadow rotation={[0.5, 0.5, 0]}>
				<Editable name="Donut" scale transform controls />
				<T.MeshPhongMaterial map={tex} />
				<T.TorusGeometry args={[2, 1, 40, 100, 6.3]} />
			</T.Mesh>
		</Theatre>
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
	}
</style>
