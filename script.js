document.addEventListener('DOMContentLoaded', () => {
    const verifyBtn = document.getElementById('verify-btn');
    const certInput = document.getElementById('cert-id');
    const resultContainer = document.getElementById('result-container');

    // Sample data for demonstration
    const mockData = {
        'BRCDP2500AL01': {
            name: 'Marwan Reddy Chinnam',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL02': {
            name: 'Susmita Pranav Godbole',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL03': {
            name: 'Prajat Suhasik Jambhulkar',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL04': {
            name: 'Nimesh Dhakal',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL05': {
            name: 'Gajula Nitish Kumar',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL06': {
            name: 'Dina Bandari',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL07': {
            name: 'Daniel Jesse Alphonsus',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL08': {
            name: 'Koustav Kundu',
            course: 'Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        
        'BRCPGD250AM01': {
            name: 'Dr. Udaykumar Nidoni',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM02': {
            name: 'Dr. Sharanagouda Hiregoudar',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM03': {
            name: 'Dr. P. F. Mathad',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM04': {
            name: 'Dr. Ramappa K T',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM05': {
            name: 'Dr. Roopa Bai R S',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM06': {
            name: 'Er. Geeta H P',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM07': {
            name: 'Dr. Jambamma',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM08': {
            name: 'Dr. Sushilendra',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM09': {
            name: 'Dr. Sunil Shirwal',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM10': {
            name: 'Dr. Murali M.',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM11': {
            name: 'Dr. Ragavendra Veerammanavar',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM12': {
            name: 'Dr. Devanand Maski',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM13': {
            name: 'Dr. Manjunath',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM14': {
            name: 'Dr. Rajkumar R Hallidoddi',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM15': {
            name: 'Dr. Prasad Kulkarni',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM16': {
            name: 'Er. Satish V K',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM17': {
            name: 'Er. Megha',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCPGD250AM18': {
            name: 'Er. Gautam',
            course: 'PG Diploma in AI, ML & Robotics in Agriculture',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        },
        'BRCDP2500AL20': {
            name: 'SUGANDHA KUMARI',
            course: 'Diploma in Artificial Intelligence (AI), Machine Learning (ML), and Robotics in Agriculture.',
            date: '2025',
            status: 'Verified',
            issuer: 'Bioresearch Community'
        }
    };

    const handleVerify = () => {
        const id = certInput.value.trim().toUpperCase();
        
        if (!id) {
            alert('Please enter a Certificate ID');
            return;
        }

        // Show loading state
        verifyBtn.disabled = true;
        verifyBtn.innerHTML = '<span>Verifying...</span>';
        
        // Simulate network delay
        setTimeout(() => {
            const data = mockData[id];
            
            if (data) {
                showResult(data, id);
            } else {
                showError();
            }
            
            verifyBtn.disabled = false;
            verifyBtn.innerHTML = '<span>Verify Now</span> <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        }, 1500);
    };

    const showResult = (data, id) => {
        resultContainer.innerHTML = `
            <div class="result-card">
                <div class="status-badge">✓ ${data.status}</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 0.5rem;">Credential Details</h3>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">This credential has been verified successfully.</p>
                
                <div class="result-grid">
                    <div class="result-item">
                        <label>Candidate Name</label>
                        <span>${data.name}</span>
                    </div>
                    <div class="result-item">
                        <label>Certification Name</label>
                        <span>${data.course}</span>
                    </div>
                    <div class="result-item">
                        <label>Year of Completion</label>
                        <span>${data.date}</span>
                    </div>
                    <div class="result-item">
                        <label>Issuing Authority</label>
                        <span>${data.issuer}</span>
                    </div>
                </div>
                
                <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--card-border); font-size: 0.8rem; color: var(--text-muted);">
                    This certificate is a digital record verified by Bioresearch Community. 
                    Any tampering with this record is strictly prohibited.
                </div>
            </div>
        `;
        
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const showError = () => {
        resultContainer.innerHTML = `
            <div class="result-card" style="border-color: rgba(239, 68, 68, 0.3);">
                <div class="status-badge" style="background: rgba(239, 68, 68, 0.1); color: #ef4444; border-color: rgba(239, 68, 68, 0.2);">✕ Not Found</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1rem;">No Record Found</h3>
                <p style="color: var(--text-muted);">We couldn't find any certificate matching the ID you provided. Please double-check the ID and try again.</p>
                <div style="margin-top: 1.5rem;">
                    <button onclick="document.getElementById('cert-id').focus()" style="background: rgba(255,255,255,0.05); color: #fff; padding: 0.75rem 1.5rem; font-size: 0.9rem;">Try Another ID</button>
                </div>
            </div>
        `;
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    verifyBtn.addEventListener('click', handleVerify);
    
    certInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleVerify();
    });
});
