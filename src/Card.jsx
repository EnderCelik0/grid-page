import { AnimatePresence, motion } from 'framer-motion';
export default function Card({ cardDetailData, isCardOpen }) {
  return (
    <>
      <AnimatePresence>
        {isCardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ duration: 3 }}
            exit={{ opacity: 0 }}
            className='card'
          >
            <main className='card-details'>
              <hr className='divider'></hr>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ duration: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opactiy: 0, scale: 0 }}
                className='detail-sections'
              >
                <h2 className='detail-title'>General</h2>
                <ul className='detail-list'>
                  <li className='detail'>
                    <span className='detail-name'>Handle</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Handle}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Name</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Name}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Color</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Color}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Layer</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Layer}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Linetype</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Linetype}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Linetype Scale</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Linetypescale}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Plot Style</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Plotstyle}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Lineweight</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Lineweight}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Transparency</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.General?.Transparency}
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ duration: 3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opactiy: 0, scale: 0 }}
                className='detail-sections'
              >
                <h2 className='detail-title'>3D Visualization</h2>
                <ul className='detail-list'>
                  <li className='detail'>
                    <span className='detail-name'>Material</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.d3Visualization?.Material}
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ duration: 3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opactiy: 0, scale: 0 }}
                className='detail-sections'
              >
                <h2 className='detail-title'>Annotation Scale</h2>
                <ul className='detail-list'>
                  <li className='detail'>
                    <span className='detail-name'>Annotative</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.Annotationscale?.Annotative}
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ duration: 3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opactiy: 0, scale: 0 }}
                className='detail-sections'
              >
                <h2 className='detail-title'>Geometry</h2>
                <ul className='detail-list'>
                  <li className='detail'>
                    <span className='detail-name'>Scale-X</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.Geometry?.ScaleX}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Scale-Y</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.Geometry?.ScaleY}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Scale-Z</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.Geometry?.ScaleZ}
                    </span>
                  </li>
                </ul>
              </motion.div>

              {cardDetailData.properties.Attributes && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ duration: 3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opactiy: 0, scale: 0 }}
                  className='detail-sections'
                >
                  <h2 className='detail-title'>Attributes</h2>
                  <ul className='detail-list'>
                    <li className='detail'>
                      <span className='detail-name'>PART NO</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.PARTNO}
                      </span>
                    </li>
                    <li className='detail'>
                      <span className='detail-name'>CS</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.CS}
                      </span>
                    </li>
                    <li className='detail'>
                      <span className='detail-name'>NNN</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.NNN}
                      </span>
                    </li>
                    <li className='detail'>
                      <span className='detail-name'>RANGE</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.RANGE}
                      </span>
                    </li>
                    <li className='detail'>
                      <span className='detail-name'>UNITS</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.UNITS}
                      </span>
                    </li>
                    <li className='detail'>
                      <span className='detail-name'>PT NAME</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.PTNAME}
                      </span>
                    </li>
                    <li className='detail'>
                      <span className='detail-name'>T</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.T}
                      </span>
                    </li>
                    <li className='detail'>
                      <span className='detail-name'>DETAIL</span>
                      <span className='detail-value'>
                        {cardDetailData.properties.Attributes?.DETAIL}
                      </span>
                    </li>
                  </ul>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ duration: 3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opactiy: 0, scale: 0 }}
                className='detail-sections'
              >
                <h2 className='detail-title'>Rotation</h2>
                <ul className='detail-list'>
                  <li className='detail'>
                    <span className='detail-name'>Rotation</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.Misc?.Rotation}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Block Unit</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.Misc?.BlockUnit}
                    </span>
                  </li>
                  <li className='detail'>
                    <span className='detail-name'>Unit Factor</span>
                    <span className='detail-value'>
                      {cardDetailData.properties.Misc?.Unitfactor}
                    </span>
                  </li>
                </ul>
              </motion.div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
