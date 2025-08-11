import React from 'react'

const Productlist = () => {
  return (
    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div classname="mt-4 flex justify-between">
          <div>
            <h3 classname="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" classname="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p classname="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p classname="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div classname="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg" alt="Front of men&#039;s Basic Tee in white." classname="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div classname="mt-4 flex justify-between">
          <div>
            <h3 classname="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" classname="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p classname="mt-1 text-sm text-gray-500">Aspen White</p>
          </div>
          <p classname="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div classname="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" alt="Front of men&#039;s Basic Tee in dark gray." classname="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div classname="mt-4 flex justify-between">
          <div>
            <h3 classname="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" classname="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p classname="mt-1 text-sm text-gray-500">Charcoal</p>
          </div>
          <p classname="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <div classname="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg" alt="Front of men&#039;s Artwork Tee in peach with white and brown dots forming an isometric cube." classname="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div classname="mt-4 flex justify-between">
          <div>
            <h3 classname="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" classname="absolute inset-0"></span>
                Artwork Tee
              </a>
            </h3>
            <p classname="mt-1 text-sm text-gray-500">Iso Dots</p>
          </div>
          <p classname="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Productlist