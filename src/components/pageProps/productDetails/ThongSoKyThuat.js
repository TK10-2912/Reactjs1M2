import React from "react";
import { SplOfferData } from "../../../constants";

const ThongSoKyThuat = () => {
	return (
		<div className="max-w-full overflow-x-auto bg-white">
			<div className="text-2xl m-4 font-bold">Thông số kỹ thuật</div>
			<div class="w-full flex items-center justify-center">
				<hr class="w-1/2 h-1 bg-red-500" />
				<hr class="w-1/2 h-1 bg-gray-400" />
			</div>
			<table className="min-w-fit   border border-gray-300  m-4">
				<tbody className="rounded-xl">
					<tr>
						<td className="border px-4 py-2">CPU</td>
						<td className="border px-4 py-2">Intel Core i5-13420H (2.10GHz up to 4.60GHz, 12MB Cache)</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Ram</td>
						<td className="border px-4 py-2">8GB DDR5 5200MHz (up to 32GB)</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Ổ cứng</td>
						<td className="border px-4 py-2">1TB SSD M.2 2242 PCIe® 4.0x4 NVMe®</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Card VGA</td>
						<td className="border px-4 py-2">NVIDIA® GeForce RTX™ 3050 6GB GDDR6</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">MUX Switch</td>
						<td className="border px-4 py-2">Có</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Màn hình</td>
						<td className="border px-4 py-2">15.6inch FHD (1920x1080) IPS 350nits Anti-glare, 45% NTSC, 144Hz</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Webcam</td>
						<td className="border px-4 py-2">HD Webcam</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Cổng kết nối</td>
						<td className="border px-4 py-2">
							<div>1 x USB 3.2 Gen 1</div>
							<div>2 x USB 3.2 Gen 2</div>
							<div>1 x USB-C® 3.2 Gen 2 (hỗ trợ truyền dữ liệu, Power Delivery 140W và DisplayPort™ 1.4)</div>
							<div>1 x HDMI®, lên đến 8K/60Hz</div>
							<div>1 x Ethernet (RJ-45)</div>
							<div>1 x Headphone / microphone combo jack (3.5mm)</div>
							<div>1 x Power connector</div>
						</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Trọng lượng</td>
						<td className="border px-4 py-2">~2.4 kg</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Pin</td>
						<td className="border px-4 py-2">4-Cell, 60Wh</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Hệ điều hành</td>
						<td className="border px-4 py-2">Windows 11 bản quyền</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ThongSoKyThuat;
