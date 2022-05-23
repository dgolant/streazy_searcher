const cookieStrings = [
  "g_state=; _actor=eyJpZCI6IkNIRUkrVVREU3V5M1drWGNVV2psdFE9PSJ9--0e9d6195323d8ca0e956723520924c2bd3d6ba13; _se_t=9ce26382-5096-4cb0-af7b-95529ddb7289; _gcl_au=1.1.1916089514.1651862772; pxcts=cd3df3e2-cd6c-11ec-94a6-714756417272; _pxvid=cd3de80b-cd6c-11ec-94a6-714756417272; _ga=GA1.2.1526521171.1651862773; zjs_user_id=null; zg_anonymous_id=%22f90f753b-efdb-4a9b-bc27-835a2b086677%22; zjs_anonymous_id=%229ce26382-5096-4cb0-af7b-95529ddb7289%22; ki_r=; google_one_tap=0; _cc_id=bea01692b3419f28434287d3b763f014; g_state=; last_search_tab=rentals; anon_searcher_stage=initial; se%3Abig_banner%3Asearch=%7B%22228962219%22%3A1%7D; __gads=ID=7d99d472b3d1a2f4:T=1651863498:S=ALNI_MZLKBUZFkrtgpEfoAoDw3mJpFWMpg; KruxPixel=true; _gid=GA1.2.1419790286.1652633915; se_lsa=2022-05-16+11%3A31%3A10+-0400; se_login_trigger=7; _ses=RjdsTFJqUkNqQlBzMTJLNG5DK09KNGdTcER3a0kzK1BHK2FlaWVXZWtsWkJOVlhhK29HSGxVaFgvUllJejdrVlRjclp1dVhrZklCVFk5OWpvai93T0lRcmpsTWQyN1BteldnZjJBM2dOSWZjeUtSSC9LWjZRcU84WDhkS1ovUEJzaElCaDF2dHQwMmVVZTFLVGlkYjd5bVZ0ZnA4TW1lYUs3akk4L1hhSWtGU2ZIV2FHbkl2NWJRcmNaZ0IrbWVXV0pUdDhCZC9iQWZnSHhBcWF6alRCNDVjaUJITVBFQTR3ZHJXNytOZ2N2Umc3aTBwNjFtd21Vd2pWWFJhaXNubmRZT0xPMTlmd3VlalZNUmJGQjBaZGljN3dHOHR5Y1FNWXdSVFl5ZE45QkFRS1hxK2hiSENURjM0UGZsNExWUjhkcEVFMUpsb2E1OUFQY05sQnZpOU9Zd0Z4LzM3ZXRYWTZZak1UemZGUUF5VC9zU3lINWc5aGE0WDBuazdRcXg5UDdXNndId1ltZjljVW02b1NoSXVDaVVqWDRXbW9FYTRLRS9oT2wraEUxai9henp6aElIQ1IveDRPOUlRUW5NQ3dlQ2NSYlNCVHQxRlFuRExjaVM4M0VRcW5IY0ZKTG1MMU1zZ2Q3VHpuNjFuWDNnQ1Z1OVJML29lOGNqb2IyeEFRbi95bWI5UzN2a3R0MS9jVkJaRUVXVzlUQXpwMWVpRXc3aEhIYmRNdWVWZmVlY3RJb0EyZlhCdmNzK2p0bTIvSGV2aTBkNDdqTGhuK2ZBNEVBK1MzaE0xc2VUcmJRQmFMWFFZQkVHTWRxND0tLU03bVBJdnpMdVRXUW9GWlVGWjE1aFE9PQ%3D%3D--7e7cbaafc4494296d189c139d5483a6a2a8dfc06; _uetsid=41cac980d47011ec82c01bde6cf281b1; _uetvid=7f26f630cd6e11ecac4907ef3508ef4d; __gpi=UID=0000055ffa0e4252:T=1651863498:RT=1652715072:S=ALNI_Ma6lUXtqO5zQSfVSiI1PuFRHEfFmg; ki_t=1651862773436%3B1652715076784%3B1652715076784%3B3%3B14; _px3=36bbfd5330514c733ace1cee4d0dc5c8274073b98207de2496502caca3d4fccd:AG6SEma4h/OUscDdJJ2Mh8Z7b7xLXdBgYKzPqHhse+SGA+oHnE5p2RSQrjudXjogzNUyoyD457cOfzdiXRjdEA==:1000:Ab4fVE5e4HV/nKd3efxxpd/OKDzA/99KD9TBoQO5G6BU2RbnracZe0LtD1aUkXYJOzYxDolFQk8bJ/UiyMs9H+PP6Q/C8vbo1pdFCH/b2JFvxh6KwIYHRfkw8CDfnIu8hGfsiWm4nNmOa9l4PTZrd82aRYtyflXEDnasalGy+hQopBmV68+/wL0T2xP0VgcCvHzSE5dZzPlQVRoufhQElA==",
  "g_state=; _actor=eyJpZCI6IkNIRUkrVVREU3V5M1drWGNVV2psdFE9PSJ9--0e9d6195323d8ca0e956723520924c2bd3d6ba13; _se_t=9ce26382-5096-4cb0-af7b-95529ddb7289; _gcl_au=1.1.1916089514.1651862772; pxcts=cd3df3e2-cd6c-11ec-94a6-714756417272; _pxvid=cd3de80b-cd6c-11ec-94a6-714756417272; _ga=GA1.2.1526521171.1651862773; zjs_user_id=null; zg_anonymous_id=%22f90f753b-efdb-4a9b-bc27-835a2b086677%22; zjs_anonymous_id=%229ce26382-5096-4cb0-af7b-95529ddb7289%22; ki_r=; google_one_tap=0; _cc_id=bea01692b3419f28434287d3b763f014; g_state=; last_search_tab=rentals; anon_searcher_stage=initial; se%3Abig_banner%3Asearch=%7B%22228962219%22%3A1%7D; __gads=ID=7d99d472b3d1a2f4:T=1651863498:S=ALNI_MZLKBUZFkrtgpEfoAoDw3mJpFWMpg; KruxPixel=true; _gid=GA1.2.1419790286.1652633915; se_lsa=2022-05-16+11%3A31%3A10+-0400; se_login_trigger=7; _ses=RjdsTFJqUkNqQlBzMTJLNG5DK09KNGdTcER3a0kzK1BHK2FlaWVXZWtsWkJOVlhhK29HSGxVaFgvUllJejdrVlRjclp1dVhrZklCVFk5OWpvai93T0lRcmpsTWQyN1BteldnZjJBM2dOSWZjeUtSSC9LWjZRcU84WDhkS1ovUEJzaElCaDF2dHQwMmVVZTFLVGlkYjd5bVZ0ZnA4TW1lYUs3akk4L1hhSWtGU2ZIV2FHbkl2NWJRcmNaZ0IrbWVXV0pUdDhCZC9iQWZnSHhBcWF6alRCNDVjaUJITVBFQTR3ZHJXNytOZ2N2Umc3aTBwNjFtd21Vd2pWWFJhaXNubmRZT0xPMTlmd3VlalZNUmJGQjBaZGljN3dHOHR5Y1FNWXdSVFl5ZE45QkFRS1hxK2hiSENURjM0UGZsNExWUjhkcEVFMUpsb2E1OUFQY05sQnZpOU9Zd0Z4LzM3ZXRYWTZZak1UemZGUUF5VC9zU3lINWc5aGE0WDBuazdRcXg5UDdXNndId1ltZjljVW02b1NoSXVDaVVqWDRXbW9FYTRLRS9oT2wraEUxai9henp6aElIQ1IveDRPOUlRUW5NQ3dlQ2NSYlNCVHQxRlFuRExjaVM4M0VRcW5IY0ZKTG1MMU1zZ2Q3VHpuNjFuWDNnQ1Z1OVJML29lOGNqb2IyeEFRbi95bWI5UzN2a3R0MS9jVkJaRUVXVzlUQXpwMWVpRXc3aEhIYmRNdWVWZmVlY3RJb0EyZlhCdmNzK2p0bTIvSGV2aTBkNDdqTGhuK2ZBNEVBK1MzaE0xc2VUcmJRQmFMWFFZQkVHTWRxND0tLU03bVBJdnpMdVRXUW9GWlVGWjE1aFE9PQ%3D%3D--7e7cbaafc4494296d189c139d5483a6a2a8dfc06; _uetsid=41cac980d47011ec82c01bde6cf281b1; _uetvid=7f26f630cd6e11ecac4907ef3508ef4d; __gpi=UID=0000055ffa0e4252:T=1651863498:RT=1652715072:S=ALNI_Ma6lUXtqO5zQSfVSiI1PuFRHEfFmg; ki_t=1651862773436%3B1652715076784%3B1652715076784%3B3%3B14; _px3=36bbfd5330514c733ace1cee4d0dc5c8274073b98207de2496502caca3d4fccd:AG6SEma4h/OUscDdJJ2Mh8Z7b7xLXdBgYKzPqHhse+SGA+oHnE5p2RSQrjudXjogzNUyoyD457cOfzdiXRjdEA==:1000:Ab4fVE5e4HV/nKd3efxxpd/OKDzA/99KD9TBoQO5G6BU2RbnracZe0LtD1aUkXYJOzYxDolFQk8bJ/UiyMs9H+PP6Q/C8vbo1pdFCH/b2JFvxh6KwIYHRfkw8CDfnIu8hGfsiWm4nNmOa9l4PTZrd82aRYtyflXEDnasalGy+hQopBmV68+/wL0T2xP0VgcCvHzSE5dZzPlQVRoufhQElA==",
  "g_state=; _ses=Z2JkOWJJOWVib3BnTUZtWDltbko2eUdCNzlUQXovYjVZNWN6ZDZRd2FZQWdNckhjMmwzR1poMno3S3hzQnB3Nlg1ZGhFV0dlUWhSZHBodVgzU3hMRHY3a25zYkZEZkxXZ3JKeE1RVFhYcElXaENDenh1RUNTNjFVK0l6TW9OWFNQcHdXNDF5aTBrc0pianBDRlhmYXZPYnRiRDBpdnVoYisxdTAvUVAxdTZ3PS0tekp0b0M0ZkNzVjFQcHZLVTBTc094dz09--7c2a045dd81d86c8faae5e8c500839ebb16e0e92; se_lsa=2022-05-20+14%3A23%3A48+-0400; _px3=a227e104197ce5a4c1e2672507754bdbc68db244cb45f32d86ab6d869d7d6934:7k6/hHtEuZAPrhlJicRHN4XZwNX/fYdQGR6iDsTLskEnkyCjLczwFb4oEkilf68ZU+WjKceiwfzrPDolRTo2yw==:1000:kIHi7AlgNLPwuuptHVr3Tc3CfS/p/XU8W9m8LXX5+YjYCAhQdxk8GJRRwgkLbU9YrCmJ7Dfr8VkoadUWNNX+P+o86LLimjI1ODhc3roWZ6feAJJxgb3idUHS+Xv1UO3Z6wP7ZzJYWeXYgvkR+jEeD6skG74CnHD0imtkUilLfOeFWZtlItD7dNkAUc1i+8BlxDS06vES9VqFkU8y7fV9bg==; zg_anonymous_id=%228217f368-7383-483b-a67d-4fe90bb685ac%22; zjs_anonymous_id=%22d4938c7c-7f28-4120-af03-ed0930f64150%22; zjs_user_id=null; google_one_tap=0; ki_r=; ki_t=1653070981819%3B1653070981819%3B1653070981819%3B1%3B1; KruxPixel=true; __gads=ID=e24a5c3190ac274e-22d9acd6357c0057:T=1653070980:RT=1653070980:S=ALNI_MbTq0oLaNDT8Q0fajEqrFtevGP-kQ; __gpi=UID=000005c35b3841e7:T=1653070980:RT=1653070980:S=ALNI_MZzO2RTzffWu_y9JixlH2V45VS80Q; _ga=GA1.2.919050097.1653070981; _gcl_au=1.1.1162498661.1653070980; _gid=GA1.2.448072065.1653070981; _pxvid=e15cae75-d869-11ec-a41c-70625369657a; pxcts=e15cb82a-d869-11ec-a41c-70625369657a; _actor=eyJpZCI6IlVYMHBkbndIbU82dG9YajNmWEZzb0E9PSJ9--5cd764c8613f7c4c0c107e095beecb10972896ba; _se_t=d4938c7c-7f28-4120-af03-ed0930f64150; canadian=false"
];

export default function () {
  const decider = Math.round(Math.random() * 10) % cookieStrings.length;
  return cookieStrings[decider];
}
