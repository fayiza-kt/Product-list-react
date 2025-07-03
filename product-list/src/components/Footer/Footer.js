import React from 'react'

function Footer() {
  const styles = {
  footer: {
    backgroundColor: '#232f3e',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  },
};
  return (
    <div>
      <footer style={styles.footer}>
        <p>&copy; 2025 E-Shop. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
